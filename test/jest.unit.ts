import type { JestConfigWithTsJest } from 'ts-jest'

import common from './jest.common'

const jestUnitConfig: JestConfigWithTsJest = {
  ...common,
  displayName: 'unit',
  setupFilesAfterEnv: ['./test/setup.ts'],
}

export default jestUnitConfig
