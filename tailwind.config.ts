import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['var(--hx-font-inter)', ...defaultTheme.fontFamily.sans],
        body: ['var(--hx-font-raleway)', ...defaultTheme.fontFamily.sans],
      },
    },
    spacing: {
      ...defaultTheme.spacing,
      6.5: '1.625rem',
    },
  },
  plugins: [],
} satisfies Config
