const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const path = require('path');
const _ = require('lodash');

const NODE_ENV = process.env.NODE_ENV || 'development';

const isProduction = process.env.NODE_ENV === 'production';

const env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined',
};

_.assign(env, {
  build: env.production || env.staging,
});

module.exports = {
  target: 'web',

  entry: {
    main: ['./src/application.tsx'],
  },

  output: {
    path: path.join(__dirname),
    publicPath: '/',
    filename: 'application.[name].js',
    chunkFilename: '[name].[id].js',
  },

  resolve: {
    modules: ['web_modules', 'node_modules', './src/images'],
    moduleExtensions: ['js', 'svg', 'tsx'],
    extensions: ['.tsx', '.ts', '.js', '.svg'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'${NODE_ENV}'`,
      },
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: `\\${NODE_ENV}\\`,
    }),
    new HtmlWebpackPlugin({
      title: 'consume',
      template: './src/entry.ejs',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      title: 'consume',
      template: './src/entry.ejs',
      inject: false,
      filename: '200.html',
    }),
    new webpack.IgnorePlugin(/unicode\/category\/So/),

    new FaviconsWebpackPlugin({
      logo: './src/images/icon-2048.png',
      icons: {
        favicons: true,
        android: isProduction,
        appleIcon: isProduction,
        windows: isProduction,
        firefox: isProduction,
        opengraph: false,
        yandex: false,
        coast: false,
        appleStartup: false,
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader?useBabel',
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          {
            loader: 'svgr/lib/webpack',
            options: {
              svgo: false
            }
          },
        ]
      },
    ],
  },
};
