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
      const feed = await ctx.db.db
        .selectFrom('feed_detail')
        .selectAll()
        .where('uri', '=', feedUri)
        .executeTakeFirst()
      if (!feed) {
        throw new InvalidRequestError('feed not found')
      }
      let qb = ctx.db.db
        .selectFrom('feed_item')
        .selectAll()
        .where('feed_item.feed', '=', feed.id)
        .orderBy('sort', 'desc')
        .limit(params.limit)
      if (cursor) {
        qb = qb.where('sort', '<', cursor)
      }
      const items = await qb.execute()
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
