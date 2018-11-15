require('dotenv').config();

const isDev = process.env.NODE_ENV === 'development';
const sPath = require('path');

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: sPath.join(__dirname, 'index.ts'),
  output: {
    path: sPath.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]s?$/,
        include: [sPath.join(__dirname, 'src')],
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  externals: {
    firebase: 'firebase',
  },
};
