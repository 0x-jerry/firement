require('dotenv').config();

const isDev = process.env.NODE_ENV === 'development';
const sPath = require('path');

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: sPath.join(__dirname, 'index.js'),
  output: {
    path: sPath.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [sPath.join(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  externals: {
    firebase: 'firebase',
  },
};
