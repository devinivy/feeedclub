import { Config } from './config'
import { Database } from './db'
import { DbSchemaType } from './db/schema'
import * as migrations from './db/migrations'
import { Indexer } from './indexer'

export type AppContextOptions = {
  cfg: Config
  db: Database<DbSchemaType>
  indexer: Indexer
}

export class AppContext {
  cfg = this.opts.cfg
  db = this.opts.db
  indexer = this.opts.indexer
  shutdown = new AbortController()

  constructor(private opts: AppContextOptions) {}

  static async fromConfig(cfg: Config, overrides?: Partial<AppContextOptions>) {
    const db = Database.sqlite<DbSchemaType>(cfg.db.location, migrations)
    const indexer = new Indexer(cfg.service.jetstreamUrl, cfg.service.did, db)
    return new AppContext({ cfg, db, indexer, ...overrides })
  }
}
