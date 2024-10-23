#!/usr/bin/env ts-node

import { FeeedClubService, envToCfg, httpLogger, readEnv } from '../src'

async function main() {
  const cfg = envToCfg(readEnv())
  const service = await FeeedClubService.create(cfg)
  await service.start()
  httpLogger.info('feeedclub service is running')
  process.on('SIGTERM', async () => {
    httpLogger.info('feeedclub service is stopping')
    await service.destroy()
    httpLogger.info('feeedclub service is stopped')
  })
}

main()
