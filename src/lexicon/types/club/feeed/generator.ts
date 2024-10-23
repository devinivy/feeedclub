/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { lexicons } from '../../../lexicons'
import { isObj, hasProp } from '../../../util'
import { CID } from 'multiformats/cid'

export interface Main {
  actors?: string[]
  handleSuffixes?: string[]
  tags?: string[]
  [k: string]: unknown
}

export function isMain(v: unknown): v is Main {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    (v.$type === 'club.feeed.generator#main' ||
      v.$type === 'club.feeed.generator')
  )
}

export function validateMain(v: unknown): ValidationResult {
  return lexicons.validate('club.feeed.generator#main', v)
}
