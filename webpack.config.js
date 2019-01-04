'use strict'

const path = require('path')
const webpack = require('webpack')
// npm install --save-dev webpack-validator (não foi instalado)
//const validate = require('webpack-validator')

//module.exports = validate({
module.exports = {
  devtool: 'source-map', // ajuda no debug do cogido

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, './src', 'index')
  ],

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
//})
}