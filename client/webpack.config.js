const Path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const output = Path.join(__dirname, "/dist");
const paths = { SRC: Path.resolve(__dirname, "src") };

const nodeEnvironment = process.env.NODE_ENV || "development";

const webpackConfig = {
  entry: "./index.jsx",
  output: {
    path: Path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/src"
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
if ( process.env.NODE_ENV !== 'production' ) {
  webpackConfig.devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: "localhost",
    port: 3000,
    proxy: {
      "/api/v0/**": {
        target: "http://localhost:8080",
        secure: false
      }
    },
    contentBase: paths.SRC,
    progress: true
  };
  
  webpackConfig.plugins = [
    // TODO: https://github.com/jantimon/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   template: Path.join(paths.SRC, "index.html"),
    // }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
}

module.exports = webpackConfig;
