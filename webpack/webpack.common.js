const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: `${commonPaths.imagesFolder}/[hash][ext][query]`,
        },
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: `${commonPaths.fontsFolder}/[hash][ext][query]`,
        },
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      emitWarning: process.env.NODE_ENV !== 'production',
      failOnError: false,
    }),
  ],
};