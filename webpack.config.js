const paths = require('./webpack/paths');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // devServer: {
  //   contentBase: paths.outputPath,
  //   compress: true,
  // },
};
