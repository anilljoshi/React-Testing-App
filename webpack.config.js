const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
       query: {
          presets: [["es2015", { "modules": false }],'react','stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties','transform-decorators-legacy']
        } 
      }
    ]
  }
}