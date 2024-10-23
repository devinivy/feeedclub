import { envBool, envInt, envStr } from '@atproto/common'

export type Config = {
  service: ServiceConfig
  db: DbConfig
}

export type ServiceConfig = {
  port: number
  version?: string
  did: string
  devMode: boolean
  jetstreamUrl: string
}

export type DbConfig = {
  location: string
}

export type Environment = {
  port?: number
  version?: string
  devMode?: boolean
  serviceDid?: string
  jetstreamUrl?: string
  dbLocation?: string
}

export const readEnv = (): Environment => {
  return {
    port: envInt('FEEED_PORT'),
    version: envStr('FEEED_VERSION'),
    devMode: envBool('FEEED_DEV_MODE'),
    serviceDid: envStr('FEEED_SERVICE_DID'),
    jetstreamUrl: envStr('FEEED_JETSTREAM_URL'),
    dbLocation: envStr('FEEED_DB_LOCATION'),
  }
}

export const envToCfg = (env: Environment): Config => {
  if (!env.serviceDid) {
    throw new Error('Must configure service did (FEEED_SERVICE_DID)')
  }
  if (!env.jetstreamUrl) {
    throw new Error('Must configure jetstream URL (FEEED_JETSTREAM_URL)')
  }
  const serviceCfg: ServiceConfig = {
    port: env.port ?? 3000,
    version: env.version,
    did: env.serviceDid,
    jetstreamUrl: env.jetstreamUrl,
    devMode: !!env.devMode,
  }
  const dbCfg: DbConfig = {
    location: env.dbLocation || ':memory:',
  }
  return {
    service: serviceCfg,
    db: dbCfg,
  }
}
