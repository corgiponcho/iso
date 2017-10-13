const Path = require('path');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ?
  process.env.PORT || 8080 :
  process.env.PORT || 3000;

webpackConfig = {
  entry: './src/index.jsx',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
};

// dev server
if (!isProduction) {
  webpackConfig.devServer = {
    contentBase: Path.join(__dirname, './'),
    // hot: false,
    port: port,
    inline: true,
    progress: true,
    historyApiFallback: true,
  };
}

module.exports = webpackConfig;
