import assert from 'node:assert'
import { once } from 'node:events'
import PQueue from 'p-queue'
import WebSocket from 'ws'
import type {
  Jetstream,
  CommitCreateEvent,
  CommitUpdateEvent,
  // @ts-ignore
} from '@skyware/jetstream'
import { AtUri } from '@atproto/api'
import { Database } from '../db'
import {
  isMain as isExtension,
  validateMain as validateExtension,
} from '../lexicon/types/club/feeed/generator'
import { DbSchemaType } from '../db/schema'
import { indexerLogger } from '../logger'
import {
  addActorsForFeed,
  addItemToFeed,
  addTagsForFeed,
  clearActorsByFeedId,
  clearTagsByFeedId,
  createFeed,
  getCursor,
  getFeedByUri,
  getMatchingFeeds,
} from './model'

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

  async feedgenHandler(
    evt:
      | CommitCreateEvent<'app.bsky.feed.generator'>
      | CommitUpdateEvent<'app.bsky.feed.generator'>,
  ) {
    try {
      const record = evt.commit.record
      if (record.did !== this.did) {
        // ensure feedgen uses this service
        return
      }
      const feedUri = AtUri.make(
        evt.did,
        evt.commit.collection,
        evt.commit.rkey,
      )
      let feed = await createFeed(this.db, {
        uri: feedUri.toString(),
      })
      if (!feed) {
        // indicates feed is already known, i.e. being updated.
        feed = await getFeedByUri(this.db, {
          uri: feedUri.toString(),
        })
        if (!feed) return // unexpected but nbd
        await clearTagsByFeedId(this.db, { id: feed.id })
        await clearActorsByFeedId(this.db, { id: feed.id })
      }
      const extension = record['$club.feeed.generator']
      if (!isExtension(extension) || !validateExtension(extension).success) {
        return
      }
      if (extension.tags?.length) {
        await addTagsForFeed(this.db, {
          id: feed.id,
          tags: extension.tags,
        })
      }
      if (extension.actors?.length) {
        await addActorsForFeed(this.db, {
          id: feed.id,
          dids: extension.actors,
        })
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
      const feed = await getFeedByUri(this.db, {
        uri: feedUri.toString(),
      })
      if (!feed) {
        return
      }
      await addItemToFeed(this.db, {
        feed: feed.id,
        post: postUri.toString(),
        sort: evt.time_us,
      })
    } catch (err) {
      indexerLogger.warn({ err, evt }, 'processing error')
    }
  }

  async postHandler(evt: CommitCreateEvent<'app.bsky.feed.post'>) {
    try {
      const record = evt.commit.record
      const tags = record.tags
      if (!tags?.length) return
      const feeds = await getMatchingFeeds(this.db, {
        tags,
        actor: evt.did,
      })
      const postUri = AtUri.make(
        evt.did,
        evt.commit.collection,
        evt.commit.rkey,
      )
      for (const feed of feeds) {
        await addItemToFeed(this.db, {
          feed: feed.id,
          post: postUri.toString(),
          sort: evt.time_us,
        })
      }
    } catch (err) {
      indexerLogger.warn({ err, evt }, 'processing error')
    }
  }

  async start() {
    const skyware = await import('@skyware/jetstream')
    const { cursor } = await getCursor(this.db)
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
    this.jetstream.onUpdate('app.bsky.feed.generator', (evt) => {
      this.queue.add(this.feedgenHandler.bind(this, evt))
    })
    this.jetstream.onCreate('club.feeed.submission', (evt) => {
      this.queue.add(this.submissionHandler.bind(this, evt))
    })
    this.jetstream.onCreate('app.bsky.feed.post', (evt) => {
      this.queue.add(this.postHandler.bind(this, evt))
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
