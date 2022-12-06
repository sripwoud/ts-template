import type { JestConfigWithTsJest } from 'ts-jest'

import common from './jest.common'

const jestConfig: JestConfigWithTsJest = {
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
  projects: [
    './test/jest.lint.ts',
    './test/jest.prettier.ts',
    './test/jest.unit.ts',
  ],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  //  TODO add prettier runner
}

export default jestConfig
