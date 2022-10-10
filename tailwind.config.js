/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color Palette
        // https://coolors.co/generate

        'brand': '#0091EA',
        'secondary': '#00838F',
        'background': '#F5F5F5',
        'foreground': '#FAFAFA',
        'typo': '#212121',

        // Darkmode
        'secondary-dark': '#26C6DA',
        'background-dark': '#121212',
        'foreground-dark': '#424242',
        'type-dark': '#FAFAFA',
      },

      margin: {
        'sm': '0.375rem', /* 6px */
        'base': '0.75rem', /* 12px */
        'lg': '1rem', /* 16px */
      },
      // TODO: Add Margin left/right/top/bottom/x/y

      padding: {
        'sm': '0.375rem', /* 6px */
        'base': '0.75rem', /* 12px */
        'lg': '1rem', /* 16px */
      },

    },

    // Overwrite

    borderRadius: {
      'sm': '0.25rem', /* 4px */
      DEFAULT: '0.5rem' /* 8px */,
      'lg': '1rem' /* 16px */,
    },

    fontSize: {
      // size: [fontSize, lineHeight]
      'sm': ['1rem', '1.5rem'],
      'base': ['1.125rem', '1.75rem'],
      'lg': ['1.5rem', '2rem'],
    },

    boxShadow: {
      'sm': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      DEFAULT: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      'lg': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    },

    fontFamily: {
      'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      'serif': ['Proxima Nova', ...defaultTheme.fontFamily.serif],
      'mono': ['Proxima Nova', ...defaultTheme.fontFamily.mono],
    },

  },
  plugins: [],
}