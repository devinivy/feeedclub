import { Server } from '../lexicon'
import { AppContext } from '../context'
import getFeedSkeleton from './get-feed-skeleton'

export * from './misc'

export default function (server: Server, ctx: AppContext) {
  getFeedSkeleton(server, ctx)
  return server
}
