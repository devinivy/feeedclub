/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { lexicons } from '../../../lexicons'
import { isObj, hasProp } from '../../../util'
import { CID } from 'multiformats/cid'

export interface Record {
  feed: string
  post: string
  [k: string]: unknown
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    (v.$type === 'club.feeed.submission#main' ||
      v.$type === 'club.feeed.submission')
  )
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate('club.feeed.submission#main', v)
}
