import type { JestConfigWithTsJest } from 'ts-jest'

import common from './jest.common'

const jestConfig: JestConfigWithTsJest = {
  ...common,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['./src/index.ts'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  projects: ['./test/jest.lint.ts', './test/jest.unit.ts'],
}

export default jestConfig
