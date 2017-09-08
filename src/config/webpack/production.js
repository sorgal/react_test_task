require('dotenv').config()
var webpack = require('webpack')
var merge = require('webpack-merge')

var config = require('./shared.js')

module.exports = merge(config, {
  output: { filename: '[name]-[hash].js' },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      }
    }),

    new webpack.DefinePlugin({
      'process.env.OBOOBS_API_URL': JSON.stringify(process.env.OBOOBS_API_URL),
      'process.env.OBOOBS_URL': JSON.stringify(process.env.OBOOBS_URL)
    })
  ]
})
