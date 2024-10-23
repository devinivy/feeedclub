import http from 'node:http'
import events from 'node:events'
import express from 'express'
import { createHttpTerminator, HttpTerminator } from 'http-terminator'
import cors from 'cors'
import { Config } from './config'
import { AppContext } from './context'
import { createServer } from './lexicon'
import API, { createMiscRouter } from './api'

export * from './db'
export * from './logger'
export * from './config'

export class FeeedClubService {
  public server?: http.Server
  private terminator?: HttpTerminator

  constructor(
    public app: express.Application,
    public ctx: AppContext,
  ) {}

  static async create(cfg: Config): Promise<FeeedClubService> {
    const app = express()
    app.use(cors())

    const ctx = await AppContext.fromConfig(cfg)

    let server = createServer({
      validateResponse: false,
      payload: {
        jsonLimit: 100 * 1024,
        textLimit: 100 * 1024,
      },
    })

    server = API(server, ctx)

    app.use(createMiscRouter(ctx))
    app.use(server.xrpc.router)

    return new FeeedClubService(app, ctx)
  }

  async start() {
    await this.ctx.db.migrateOrThrow()
    await this.ctx.indexer.start()
    this.server = this.app.listen(this.ctx.cfg.service.port)
    this.terminator = createHttpTerminator({ server: this.server })
    await events.once(this.server, 'listening')
  }

  async destroy() {
    this.ctx.shutdown.abort()
    await this.terminator?.terminate()
    await this.ctx.indexer.destroy()
    await this.ctx.db.close()
  }
}
