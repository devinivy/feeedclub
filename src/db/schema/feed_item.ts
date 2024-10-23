export interface FeedItem {
  feed: number
  sort: number
  post: string
}

export const tableName = 'feed_item'

export type PartialDB = {
  [tableName]: FeedItem
}
