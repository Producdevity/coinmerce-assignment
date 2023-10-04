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

const config: Config = {
  modulePathIgnorePatterns: ignorePatterns,
  testMatch: ['<rootDir>/**/*.test.[jt]s?(x)'],
  transform: {
    '\\.[jt]sx?$': 'esbuild-jest',
  },

  watchPathIgnorePatterns: [...ignorePatterns, '\\/node_modules\\/'],
  moduleNameMapper: hq.get('jest'),

  // setupFiles: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default config
