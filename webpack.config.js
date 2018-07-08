const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: [
     './src/index.js',
     './src/styles/index.js'
   ],
   module: {
     rules: [
       {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         use: ['babel-loader']
       },
       {
       test: /\.scss$/,
       use:  [
         'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader']
      }
     ]
   },
   resolve: {
     extensions: ['*', '.js', '.jsx']
   },
   output: {
     path: __dirname + '/dist',
     publicPath: '/',
     filename: '[name].[hash].js',
   },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
     filename: "style.[hash].css",
    }),
    new HtmlWebpackPlugin({
       template: "./src/index.html",
       inject: 'head',
     }),
  ],
   devServer: {
     contentBase: './dist',
       hot: true
   },
};
