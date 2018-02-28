var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    index: './app/index.js',
    vendor: [
      'moment',
      'lodash'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // name: 'vendor' // Specify the common bundle's name.
      names: ['vendor', 'manifest'] // Extract the webpack bootstrap logic into manifest.js
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: './dist/'
    })
  ]
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all"
  //       }
  //     }
  //   }
  // },
};
