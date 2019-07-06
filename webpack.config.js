'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: './src/scanner',
  output: {
    library: ['toio', 'scanner'],
    libraryTarget: 'umd',
    path: __dirname,
    filename: 'scanner.js'
  },
  resolve: {
    alias: {
      'noble-mac': 'noble'
    }
  },
  plugins: [
    new webpack.IgnorePlugin(/^ws$/)
  ],
  devtool: 'source-map'
};
