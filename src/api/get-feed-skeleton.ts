import { Server } from '../lexicon'
import { AppContext } from '../context'

export default function (server: Server, _ctx: AppContext) {
  server.app.bsky.feed.getFeedSkeleton({
    handler: async () => {
      return {
        encoding: 'application/json',
        body: {
          feed: [],
        },
      }
    },
  })
}
