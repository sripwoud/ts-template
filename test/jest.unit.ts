import type { JestConfigWithTsJest } from 'ts-jest'

import common from './jest.common'

const jestUnitConfig: JestConfigWithTsJest = {
  ...common,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/src/index.ts'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  displayName: 'unit',
  setupFilesAfterEnv: ['./test/setup.ts'],
}

export default jestUnitConfig
