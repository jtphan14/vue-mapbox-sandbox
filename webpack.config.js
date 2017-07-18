var projectRoot = process.cwd()
const webpack = require('webpack');


// Overriding default base webpack config
module.exports = {
  resolve: {
    // Aliases - Used for pointing to reusable parts of your app
    alias: {
      'src': projectRoot + '/src',
      'images': projectRoot + '/src/assets/images',
      'scss': projectRoot + '/src/assets/scss',
      'js': projectRoot + '/src/assets/js',
      // vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery",
    //     // "window.jQuery": "jquery"
    // }),
  ]
}
