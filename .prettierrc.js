/** @type {import("prettier").Config} */
const config = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: ['.lintstagedrc'],
      options: { parser: 'json' },
    },
  ],
}

export default config
