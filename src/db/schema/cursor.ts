export interface Cursor {
  cursor: number
}

export const tableName = 'cursor'

export type PartialDB = {
  [tableName]: Cursor
}
