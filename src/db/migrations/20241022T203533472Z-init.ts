import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable('feed_detail')
    .addColumn('id', 'integer', (col) => col.primaryKey())
    .addColumn('uri', 'text', (col) => col.notNull().unique())
    .modifyEnd(sql`strict`)
    .execute()
  await db.schema
    .createTable('feed_actor')
    .addColumn('id', 'integer', (col) => col.notNull())
    .addColumn('did', 'text', (col) => col.notNull())
    .addPrimaryKeyConstraint('feed_actor_pkey', ['id', 'did'])
    .modifyEnd(sql`strict`)
    .execute()
  await db.schema
    .createTable('feed_tag')
    .addColumn('id', 'integer', (col) => col.notNull())
    .addColumn('tag', 'text', (col) => col.notNull())
    .addPrimaryKeyConstraint('feed_tag_pkey', ['id', 'tag'])
    .modifyEnd(sql`strict`)
    .execute()
  await db.schema
    .createTable('feed_item')
    .addColumn('feed', 'integer', (col) => col.notNull())
    .addColumn('sort', 'integer', (col) => col.notNull())
    .addColumn('post', 'text', (col) => col.notNull())
    .addPrimaryKeyConstraint('feed_item_pkey', ['feed', 'sort'])
    .modifyEnd(sql`strict`)
    .execute()
  await db.schema
    .createTable('cursor')
    .addColumn('cursor', 'integer', (col) => col.notNull())
    .modifyEnd(sql`strict`)
    .execute()
  // @ts-ignore
  await db.insertInto('cursor').values({ cursor: 0 }).execute()
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable('cursor').execute()
  await db.schema.dropTable('feed_item').execute()
  await db.schema.dropTable('feed_tag').execute()
  await db.schema.dropTable('feed_author').execute()
  await db.schema.dropTable('feed_detail').execute()
}
