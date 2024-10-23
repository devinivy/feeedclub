import { InvalidRequestError } from '@atproto/xrpc-server'
import { Server } from '../lexicon'
import { AppContext } from '../context'

export default function (server: Server, ctx: AppContext) {
  server.app.bsky.feed.getFeedSkeleton({
    handler: async ({ params }) => {
      const feedUri = params.feed
      const cursor = params.cursor ? parseInt(params.cursor, 10) : undefined
      if (cursor && isNaN(cursor)) {
        throw new InvalidRequestError('invalid cursor')
      }
      const feed = await getFeedByUri(ctx, { uri: feedUri })
      if (!feed) {
        throw new InvalidRequestError('feed not found')
      }
      const items = await getFeedItems(ctx, {
        id: feed.id,
        cursor,
        limit: params.limit,
      })
      return {
        encoding: 'application/json',
        body: {
          cursor: items.at(-1)?.sort.toString(),
          feed: items.map(({ post }) => ({ post })),
        },
      }
    },
  })
}

function getFeedByUri(ctx: AppContext, { uri }: { uri: string }) {
  return ctx.db.db
    .selectFrom('feed_detail')
    .selectAll()
    .where('uri', '=', uri)
    .executeTakeFirst()
}

function getFeedItems(
  ctx: AppContext,
  {
    id,
    cursor,
    limit,
  }: { id: number; cursor: number | undefined; limit: number },
) {
  let qb = ctx.db.db
    .selectFrom('feed_item')
    .selectAll()
    .where('feed_item.feed', '=', id)
    .orderBy('sort', 'desc')
    .limit(limit)
  if (cursor) {
    qb = qb.where('sort', '<', cursor)
  }
  return qb.execute()
}
