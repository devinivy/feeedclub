import { GeneratedAlways } from 'kysely'

export interface FeedDetail {
  id: GeneratedAlways<number>
  uri: string
}

export interface FeedActor {
  id: number
  did: string
}

export interface FeedTag {
  id: number
  tag: string
}

export type PartialDB = {
  feed_detail: FeedDetail
  feed_tag: FeedTag
  feed_actor: FeedActor
}
