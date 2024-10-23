import assert from 'node:assert'
import {
  Kysely,
  Migration,
  SqliteDialect,
  Migrator as KyselyMigrator,
} from 'kysely'
import SqliteDB from 'better-sqlite3'
import { dbLogger } from '../logger'

export class Database<Schema> {
  destroyed = false

  constructor(
    public db: Kysely<Schema>,
    public migrations: Record<string, Migration>,
  ) {}

  static sqlite<T>(
    location: string,
    migrations: Record<string, Migration>,
  ): Database<T> {
    const sqliteDb = new SqliteDB(location, {
      timeout: 5000,
    })
    const db = new Kysely<T>({
      dialect: new SqliteDialect({
        database: sqliteDb,
      }),
    })
    sqliteDb.pragma('journal_mode = WAL')
    return new Database(db, migrations)
  }

  get isTransaction() {
    return this.db.isTransaction
  }

  assertTransaction() {
    assert(this.isTransaction, 'Transaction required')
  }

  assertNotTransaction() {
    assert(!this.isTransaction, 'Cannot be in a transaction')
  }

  close(): void {
    if (this.destroyed) return
    this.db
      .destroy()
      .then(() => (this.destroyed = true))
      .catch((err) => dbLogger.error({ err }, 'error closing db'))
  }

  async migrateOrThrow() {
    const migrator = new Migrator<Schema>(this)
    await migrator.migrateToLatestOrThrow()
  }
}

class Migrator<T> extends KyselyMigrator {
  constructor(public db: Database<T>) {
    super({
      db: db.db,
      provider: {
        async getMigrations() {
          return db.migrations
        },
      },
    })
  }

  async migrateToLatestOrThrow() {
    const { error, results } = await this.migrateToLatest()
    if (error) {
      throw error
    }
    if (!results) {
      throw new Error('An unknown failure occurred while migrating')
    }
    return results
  }
}
