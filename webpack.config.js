const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    tours: './src/scripts/tours.js',
    program: './src/scripts/program.js',
    contacts: './src/scripts/contacts.js',
    about: './src/scripts/about.js',
    faq: './src/scripts/faq.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './scripts/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-class-properties']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          (isDev ? { loader: 'style-loader' } : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          }),
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: 'file-loader?name=./fonts/[name].[ext]',
      },
      {
        test: /\.(jpg|jpeg|png|svg|webp)$/,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/tours.html',
      filename: './tours.html',
      chunks: ['tours'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/program.html',
      filename: './program.html',
      chunks: ['program'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/contacts.html',
      filename: './contacts.html',
      chunks: ['contacts'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/about.html',
      filename: './about.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/faq.html',
      filename: './faq.html',
      chunks: ['faq'],
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
