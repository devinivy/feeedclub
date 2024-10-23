import express from 'express'
import { sql } from 'kysely'
import { AppContext } from '../context'

export const createMiscRouter = (ctx: AppContext): express.Router => {
  const router = express.Router()

  router.get('/xrpc/_health', async function (_req, res) {
    const { version } = ctx.cfg.service
    try {
      await sql`select 1`.execute(ctx.db.db)
      return res.send({ version })
    } catch (err) {
      return res.status(503).send({ version, error: 'Service Unavailable' })
    }
  })

  if (ctx.cfg.service.did.startsWith('did:web:')) {
    const hostname = ctx.cfg.service.did.slice('did:web:'.length)
    router.get('/.well-known/did.json', function (_req, res) {
      return res.json({
        '@context': ['https://www.w3.org/ns/did/v1'],
        id: ctx.cfg.service.did,
        service: [
          {
            id: '#bsky_fg',
            type: 'BskyFeedGenerator',
            serviceEndpoint: `https://${hostname}`,
          },
        ],
      })
    })
  }

  return router
}
