const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: { localIdentName: '[local]___[hash:base64:5]' } },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: commonPaths.outputPath,
    },
    compress: true,
    historyApiFallback: true,
    port: 8080,
  },
};