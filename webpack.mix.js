const mix = require('laravel-mix')
const path = require('path')

// NOTE: Don't remove this, Because it's the default public folder path on AdonisJs
mix.setPublicPath('public')
mix.browserSync('localhost:3333')

// Add your assets here
mix
  .ts('resources/js/app.tsx', 'public/js/app.js')
  .postCss('resources/css/styles.css', 'public/css', [require('tailwindcss')])
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    resolve: {
      alias: {
        '@': path.resolve('resources/js'),
      },
    },
  })
  .sourceMaps()
