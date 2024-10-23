import { Kysely } from 'kysely'
import * as feedItem from './feed_item'
import * as cursor from './cursor'

export type DbSchemaType = feedItem.PartialDB & cursor.PartialDB

export type DbSchema = Kysely<DbSchemaType>

export default DbSchema
