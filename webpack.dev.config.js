const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './example/src/index.js',
  output: {
    path: path.resolve(__dirname, 'example/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      key: process.env.API_KEY
    })
  ]
}
