import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
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
