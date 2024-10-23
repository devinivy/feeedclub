import { Kysely } from 'kysely'
import * as feedDetail from './feed_detail'
import * as feedItem from './feed_item'
import * as cursor from './cursor'

export type DbSchemaType = feedDetail.PartialDB &
  feedItem.PartialDB &
  cursor.PartialDB

export type DbSchema = Kysely<DbSchemaType>

export default DbSchema
