import { Database } from '../db'
import { DbSchemaType } from '../db/schema'

export function createFeed(
  db: Database<DbSchemaType>,
  { uri }: { uri: string },
) {
  return db.db
    .insertInto('feed_detail')
    .values({ uri })
    .onConflict((oc) => oc.doNothing())
    .returningAll()
    .executeTakeFirst()
}

export function getFeedByUri(
  db: Database<DbSchemaType>,
  { uri }: { uri: string },
) {
  return db.db
    .selectFrom('feed_detail')
    .selectAll()
    .where('uri', '=', uri)
    .executeTakeFirst()
}

export function addTagsForFeed(
  db: Database<DbSchemaType>,
  { id, tags }: { id: number; tags: string[] },
) {
  return db.db
    .insertInto('feed_tag')
    .values(tags.map((tag) => ({ id, tag })))
    .onConflict((oc) => oc.doNothing())
    .execute()
}

export function clearTagsByFeedId(
  db: Database<DbSchemaType>,
  { id }: { id: number },
) {
  return db.db.deleteFrom('feed_tag').where('id', '=', id).execute()
}

export function addActorsForFeed(
  db: Database<DbSchemaType>,
  { id, dids }: { id: number; dids: string[] },
) {
  return db.db
    .insertInto('feed_actor')
    .values(dids.map((did) => ({ id, did })))
    .onConflict((oc) => oc.doNothing())
    .execute()
}

export function clearActorsByFeedId(
  db: Database<DbSchemaType>,
  { id }: { id: number },
) {
  return db.db.deleteFrom('feed_actor').where('id', '=', id).execute()
}

export function getMatchingFeeds(
  db: Database<DbSchemaType>,
  { tags, actor }: { tags: string[]; actor: string },
) {
  return db.db
    .selectFrom('feed_detail')
    .selectAll()
    .where(({ exists }) =>
      exists((inner) =>
        inner
          .selectFrom('feed_tag')
          .selectAll()
          .whereRef('feed_tag.id', '=', 'feed_detail.id')
          .where('feed_tag.tag', 'in', tags),
      ),
    )
    .where(({ exists }) =>
      exists((inner) =>
        inner
          .selectFrom('feed_actor')
          .selectAll()
          .whereRef('feed_actor.id', '=', 'feed_detail.id')
          .where('feed_actor.did', '=', actor),
      ),
    )
    .execute()
}

export function addItemToFeed(
  db: Database<DbSchemaType>,
  { feed, post, sort }: { feed: number; post: string; sort: number },
) {
  return db.db
    .insertInto('feed_item')
    .values({ feed, post, sort })
    .onConflict((oc) => oc.doNothing())
    .executeTakeFirst()
}

export function getCursor(db: Database<DbSchemaType>) {
  return db.db
    .selectFrom('cursor')
    .selectAll()
    .limit(1)
    .executeTakeFirstOrThrow()
}
