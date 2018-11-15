const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const sPath = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: [
      sPath.join(__dirname, 'dist'),
      sPath.join(__dirname, 'static'),
    ],
    compress: true,
    port: process.env.PORT,
    hot: true,
    watchContentBase: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin(['./static']),
    new Dotenv(),
  ],
});
