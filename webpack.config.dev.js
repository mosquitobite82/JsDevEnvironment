import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  debug: true,
  devtool: "inline-source-map",
  entry: [
    path.resolve(__dirname, "src/index"),
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loaders: ["babel"],
        test: /\.js$/,
      },
      {
        loaders: ["style", "css"],
        test: /\.css$/,
      },
    ],
  },
  noInfo: false,
  output: {
    fileName: "bundle.js",
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "src/index.html",
    }), // Include HTML file that ref to bundles JS
  ],
  target: "web",
};
