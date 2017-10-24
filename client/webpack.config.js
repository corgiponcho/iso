const Path = require('path');
const webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV;

const env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

const isProduction = process.env.NODE_ENV === 'production';

const port = isProduction ? 8080 : 3000;

console.log('DIRNAME --->', __dirname);

const webpackConfig = {
  // entry: "./client/src/index.jsx",
  entry: "./index.jsx",
  output: {
    path: Path.join(__dirname, 'dist'),
    // path: "/Users/michelle/Documents/projects/iso/client/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  },
  devtool: "eval-source-map"
};

// dev server
// see https://stackoverflow.com/questions/35233291/running-a-node-express-server-using-webpack-dev-server
if (!isProduction) {
  webpackConfig.devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: 'localhost',
    proxy: {
      "^/*": {
        target: `http://localhost:${port}/`,
        secure: false
      }
    },
    contentBase: Path.join(__dirname, "./"),
    port: port,
    progress: true
  };

  webpackConfig.plugins = [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
}

module.exports = webpackConfig;
