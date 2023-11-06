import { describe, expect, it } from 'bun:test'
import { TEST } from '@mod'

describe('Test', () => {
	it('some test', () => {
		expect(TEST).toEqual('abc')
	})
})
