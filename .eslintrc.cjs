/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/jest-testing-library',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-key': 'error',
    'prefer-template': 'error',
    'prefer-const': 'error',
  },
}
