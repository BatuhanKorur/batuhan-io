import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['HelveticaNow', 'Helvetica', 'sans-serif'],
      code: ['Jetbrains'],
    },
    fontSize: {
      sm: '0.85rem',
      base: '0.94rem',
      md: '1.1rem',
      lg: '1.2rem',
    },
    extend: {
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
        },
        border: {
          DEFAULT: 'hsl(var(--border))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
        },
        code: {
          keyword: 'hsl(var(--code-keyword))',
          string: 'hsl(var(--code-string))',
          var: 'hsl(var(--code-var))',
          comment: 'hsl(var(--code-comment))',
          background: 'hsl(var(--code-background))',
          gutter: 'hsl(var(--code-gutter))',
          operator: 'hsl(var(--code-operator))',
          property: 'hsl(var(--code-property))',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.v-align': {
          display: 'flex',
          alignItems: 'center',
        },
        '.v-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.v-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.v-col': {
          display: 'flex',
          flexDirection: 'column',
        },
        '.v-col-align': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        },
        '.v-col-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        },
        '.v-trans': {
          transitionProperty: 'all',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.v-click': {
          transitionProperty: 'all',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
        },
        '.v-full': {
          display: 'flex',
          flexDirection: 'column',
          flexGrow: '1',
          width: '100%',
          height: '100%',
        },
      })
    }),
  ],
}
export default config
