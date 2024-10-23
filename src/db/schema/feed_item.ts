export interface FeedItem {
  feed: number
  sort: number
  post: string
}

export type PartialDB = {
  feed_item: FeedItem
}
