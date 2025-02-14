import { TEST } from '@mod/file'
import { describe, expect, it } from 'bun:test'

describe('Test', () => {
  it('some test', () => {
    expect(TEST).toEqual('abc')
  })
})
