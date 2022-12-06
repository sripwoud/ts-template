import type { JestConfigWithTsJest } from 'ts-jest'
import { pathsToModuleNameMapper } from 'ts-jest'

import { compilerOptions } from '../tsconfig.json'

const jestConfig: JestConfigWithTsJest = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['src/index.ts'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleDirectories: ['node_modules', __dirname],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: 'ts-jest',
  rootDir: '..',
  setupFilesAfterEnv: ['./test/setup.ts'],
  verbose: true,
}

export default jestConfig
