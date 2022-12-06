import type { JestConfigWithTsJest } from 'ts-jest'

const jestLintConfig: JestConfigWithTsJest = {
  displayName: 'lint',
  rootDir: '..',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/*ts'],
}

export default jestLintConfig
