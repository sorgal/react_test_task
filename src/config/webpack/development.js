var webpack = require('webpack')
var merge = require('webpack-merge')

var config = require('./shared.js')

module.exports = merge(config, {
  devtool: 'sourcemap',

  stats: {
    errorDetails: true
  },

  output: {
    pathinfo: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env.OBOOBS_API_URL': JSON.stringify(process.env.OBOOBS_API_URL),
      'process.env.OBOOBS_URL': JSON.stringify(process.env.OBOOBS_URL)
    })
  ],
  devServer: {
    historyApiFallback: true
  }
})
