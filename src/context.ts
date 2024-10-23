import { Config } from './config'
import { Database } from './db'
import DbSchema from './db/schema'
import * as migrations from './db/migrations'

export type AppContextOptions = {
  cfg: Config
  db: Database<DbSchema>
}

export class AppContext {
  cfg = this.opts.cfg
  db = this.opts.db
  shutdown = new AbortController()

  constructor(private opts: AppContextOptions) {}

  static async fromConfig(cfg: Config, overrides?: Partial<AppContextOptions>) {
    const db = Database.sqlite<DbSchema>(cfg.db.location, migrations)
    return new AppContext({ cfg, db, ...overrides })
  }
}
