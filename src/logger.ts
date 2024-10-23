import _pino from 'pino'
import { subsystemLogger } from '@atproto/common'

export const httpLogger = subsystemLogger('feeedclub')
export const dbLogger = subsystemLogger('feeedclub:db')
