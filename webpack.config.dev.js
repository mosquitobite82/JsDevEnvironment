import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  mode: "development",
  target: "web",
  devtool: 'cheap-module-source-map',
  entry: { 
    app: './src/index'
  },
  optimization:{
    splitChunks:{chunks: 'async'}
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        } 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
    filename: '[name].bundle.js'
  },
};

export { config };