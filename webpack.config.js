require('dotenv').config();
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.MODE || 'development',
  entry: path.join(__dirname, 'client/index.jsx'),

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  /*  plugins: [
     new htmlWebpackPlugin({
       template: path.join(__dirname, 'client/index.html')
     })
   ], */

  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  }
}