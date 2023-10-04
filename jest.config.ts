// @ts-ignore
import hq from 'alias-hq'
import type { Config } from 'jest'

const ignorePatterns = [
  '\\/build\\/',
  '\\/coverage\\/',
  '\\/\\.vscode\\/',
  '\\/\\.tmp\\/',
  '\\/\\.cache\\/',
]

/**
 * Don't bother get this working for now.
 * It's not worth the effort. The Remix teams is working on it.
 * @see https://github.com/remix-run/remix/pull/1939
 */

const config: Config = {
  modulePathIgnorePatterns: ignorePatterns,
  testMatch: ['<rootDir>/**/*.test.[jt]s?(x)'],
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
  },

  watchPathIgnorePatterns: [...ignorePatterns, '\\/node_modules\\/'],
  moduleNameMapper: hq.get('jest'),

  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config
