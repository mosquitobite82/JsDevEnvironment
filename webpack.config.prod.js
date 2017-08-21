import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackMd5Hash from "webpack-md5-hash";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  debug: true,
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor"),
  },
  inject: true,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"]},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
    ],
  },
  noInfo: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new ExtractTextPlugin("[name].[contenthash].css"),
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      filename: "[name].[chunkhash].bundle.js",
      names: ["vendor", "main"],
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: "src/index.html",
    }), // Include HTML file that ref to bundles JS
    new webpack.optimize.DedupePlugin(), // Removes duplicate packages when bundling
    new webpack.optimize.UglifyJsPlugin(), // Minify
  ],
  target: "web",
};
