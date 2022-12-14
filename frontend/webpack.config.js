const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// wraps dotenv and Webpack.DefinePlugin 라는데 써도 되는지 모름
// const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  // 엔트리 포인트
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
  // 파일 확장자 처리
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },

  plugins: [
    new RefreshWebpackPlugin(),
    // dotenv
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css",
    // }),
    // new MiniCssExtractPlugin({filename: 'app.css'}),
    // new Dotenv()
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, '/public'),
    },
    port: 3000,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.(sa|sc|c)ss$/i,
      //   exclude:path.resolve(__dirname, "node_modules"),
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
