const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('tailwindcss'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    // process.env.NODE_ENV === 'production'
    //   ? cssnano({ preset: 'default' })
    //   : null,
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./public/index.html', './src/**/*.tsx', './src/**/*.jsx'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
}
