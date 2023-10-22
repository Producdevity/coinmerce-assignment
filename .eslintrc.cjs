/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-key': 'error',
    'prefer-template': 'error',
    'prefer-const': 'error',
  },
}
