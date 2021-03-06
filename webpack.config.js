var webpack = require('webpack')
var license = require('./license.js')
module.exports = {
  context: __dirname,
  entry: [
    './src/synaptic.js'
  ],
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.BannerPlugin(license())
  ]
}
