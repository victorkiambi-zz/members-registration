const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/router/index.js','public/js')
    .js('resources/components/index.js','public/js')
    .js('resources/main.js','public/js')
       .copy('resources/css/app.css', 'public/css')
   .sass('resources/sass/app.scss', 'public/css');



   mix.webpackConfig({
      resolve: {
          alias: {
            '@': path.resolve(__dirname, 'resources'),
          }
        }
    });
  
    mix.disableSuccessNotifications();
