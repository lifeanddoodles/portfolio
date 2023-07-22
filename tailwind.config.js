const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.green[600],
          DEFAULT: colors.green[800],
          dark: colors.green[900],
        },
        accent: {
          light: colors.red[400],
          DEFAULT: colors.red[600],
          dark: colors.red[800],
        },
        neutral: {
          50: colors.gray[50],
          100: colors.gray[100],
          200: colors.gray[200],
          300: colors.gray[300],
          700: colors.gray[700],
          800: colors.gray[800],
          900: colors.gray[900],
          950: colors.gray[950],
        },
        dark: {
          colors: {
            primary: colors.green[300],
            accent: colors.red[500],
            neutral: {
              50: colors.gray[950],
              100: colors.gray[900],
              200: colors.gray[800],
              300: colors.gray[700],
              700: colors.gray[300],
              800: colors.gray[200],
              900: colors.gray[100],
              950: colors.gray[50],
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
