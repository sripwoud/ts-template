import assert from 'assert'
import type { JestConfigWithTsJest } from 'ts-jest'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from '../tsconfig.json'

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
})

assert(moduleNameMapper !== undefined)

const jestConfig: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['<rootDir>/src/index.ts'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleDirectories: [
    'node_modules',
    '<rootDir>/node_modules',
    '<rootDir>/*/src',
    '<rootDir>/src',
  ],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper,
  preset: 'ts-jest',
  rootDir: '..',
  setupFilesAfterEnv: ['./test/setup.ts'],
  testPathIgnorePatterns: [
    'coverage',
    'dist',
    'node_modules',
    'pnpm-lock.yaml',
  ],
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

export default jestConfig
