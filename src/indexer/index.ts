import assert from 'node:assert'
import { once } from 'node:events'
import PQueue from 'p-queue'
import WebSocket from 'ws'
// @ts-ignore
import type { Jetstream, CommitCreateEvent } from '@skyware/jetstream'
import { AtUri } from '@atproto/api'
import { Database } from '../db'
import {
  isMain as isExtension,
  validateMain as validateExtension,
} from '../lexicon/types/club/feeed/generator'
import { DbSchemaType } from '../db/schema'
import { indexerLogger } from '../logger'

// @TODO manage cursor

type IndexerStream = Jetstream<
  'app.bsky.feed.generator' | 'app.bsky.feed.post' | 'club.feeed.submission'
>

export class Indexer {
  queue = new PQueue()
  jetstream: IndexerStream | null = null
  constructor(
    public endpoint: string,
    public did: string,
    public db: Database<DbSchemaType>,
  ) {}

  async feedgenHandler(evt: CommitCreateEvent<'app.bsky.feed.generator'>) {
    try {
      const record = evt.commit.record
      const extension = record['$club.feeed.generator']
      if (record.did !== this.did) return
      if (!isExtension(extension) || !validateExtension(extension).success) {
        return
      }
      const feed = await this.db.db
        .insertInto('feed_detail')
        .values({
          uri: AtUri.make(
            evt.did,
            evt.commit.collection,
            evt.commit.rkey,
          ).toString(),
        })
        .onConflict((oc) => oc.doNothing())
        .returningAll()
        .executeTakeFirst()
      if (!feed) return
      if (extension.tags?.length) {
        await this.db.db
          .insertInto('feed_tag')
          .values(
            extension.tags.map((tag) => ({
              id: feed.id,
              tag: tag,
            })),
          )
          .onConflict((oc) => oc.doNothing())
          .execute()
      }
      if (extension.actors?.length) {
        await this.db.db
          .insertInto('feed_actor')
          .values(
            extension.actors.map((did) => ({
              id: feed.id,
              did: did,
            })),
          )
          .onConflict((oc) => oc.doNothing())
          .execute()
      }
    } catch (err) {
      indexerLogger.warn({ err, evt }, 'processing error')
    }
  }

  async submissionHandler(evt: CommitCreateEvent<'club.feeed.submission'>) {
    try {
      const submitter = evt.did
      const record = evt.commit.record
      if (
        typeof record['post'] !== 'string' ||
        typeof record['feed'] !== 'string'
      ) {
        return
      }
      const postUri = new AtUri(record['post'])
      const feedUri = new AtUri(record['feed'])
      if (postUri.collection !== 'app.bsky.feed.post') {
        return
      }
      if (
        feedUri.collection !== 'app.bsky.feed.generator' ||
        feedUri.host !== submitter
      ) {
        return
      }
      const feed = await this.db.db
        .selectFrom('feed_detail')
        .selectAll()
        .where('uri', '=', feedUri.toString())
        .executeTakeFirst()
      if (!feed) {
        return
      }
      await this.db.db
        .insertInto('feed_item')
        .values({
          feed: feed.id,
          post: postUri.toString(),
          sort: evt.time_us,
        })
        .onConflict((oc) => oc.doNothing())
        .execute()
    } catch (err) {
      indexerLogger.warn({ err, evt }, 'processing error')
    }
  }

  async start() {
    const skyware = await import('@skyware/jetstream')
    const { cursor } = await this.db.db
      .selectFrom('cursor')
      .selectAll()
      .executeTakeFirstOrThrow()
    assert(!this.jetstream, 'jetstream already setup')
    this.jetstream = new skyware.Jetstream({
      endpoint: this.endpoint,
      cursor: cursor || undefined,
      wantedCollections: [
        'app.bsky.feed.generator',
        'app.bsky.feed.post',
        'club.feeed.submission',
      ],
      ws: WebSocket,
    })
    this.jetstream.onCreate('app.bsky.feed.generator', (evt) => {
      this.queue.add(this.feedgenHandler.bind(this, evt))
    })
    this.jetstream.onCreate('club.feeed.submission', (evt) => {
      this.queue.add(this.submissionHandler.bind(this, evt))
    })
    this.jetstream.start()
  }

  async destroy() {
    if (this.jetstream) {
      this.jetstream.close()
      await once(this.jetstream, 'close')
    }
    await this.queue.onIdle()
  }
}
