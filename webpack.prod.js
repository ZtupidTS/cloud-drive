const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    filename: '[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.(jsx|js)$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
       title: '云盘',
       template: 'dist/index.html'
    })
  ]
};