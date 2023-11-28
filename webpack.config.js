const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const cssRules = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
}

const imgRules = {
  test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
  type: 'asset/resource',
}

const rules = [
  cssRules,
  imgRules,
]

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head',
    })
  ],
  devServer: {
    open: true,
    port: 3000,
  }
}