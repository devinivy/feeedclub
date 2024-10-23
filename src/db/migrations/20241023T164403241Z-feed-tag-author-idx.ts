import { Kysely } from 'kysely'

export async function up(db: Kysely<unknown>): Promise<void> {
  // supports feed deletion and updates
  await db.schema
    .createIndex('feed_tag_id_idx')
    .on('feed_tag')
    .column('id')
    .execute()
  await db.schema
    .createIndex('feed_actor_id_idx')
    .on('feed_actor')
    .column('id')
    .execute()
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropIndex('feed_actor_id_idx').execute()
  await db.schema.dropIndex('feed_tag_id_idx').execute()
}
