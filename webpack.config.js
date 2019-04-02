const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const dir = (...paths) => path.join(__dirname, ...paths)

module.exports = (env) => {
  const isDev = env.dev === true
  process.env.ENV_NODE = env.dev ? 'development' : 'production'

  const outputPath = dir('dist')

  /**
   * @type {import('webpack').Configuration}
   */
  const config = {
    mode: process.env.ENV_NODE,
    entry: isDev ? dir('index.ts') : dir('src/comment.ts'),
    output: {
      library: 'firement',
      path: outputPath,
    },
    module: {
      rules: [
        {
          test: /.[tj]s?$/,
          include: [dir('src'), dir('index.ts')],
          loader: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    externals: {
      firebase: 'firebase',
    },
    devtool: isDev ? 'source-map' : 'inline-source-map',
    plugins: isDev
      ? [
          new webpack.HotModuleReplacementPlugin(),
          new CopyWebpackPlugin([{ from: 'static', to: 'static' }]),
          new Dotenv(),
          new HtmlWebpackPlugin({
            filename: 'index.html',
            template: dir('index.html'),
          }),
        ]
      : [new CleanWebpackPlugin([outputPath])],
  }

  return config
}
