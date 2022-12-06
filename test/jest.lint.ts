import type { JestConfigWithTsJest } from 'ts-jest'

import common from './jest.common'

const jestLintConfig: JestConfigWithTsJest = {
  ...common,
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/*ts'],
}

export default jestLintConfig
