const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist/'),
    chunkFilename: '[name].[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader'],
          },
          {
            use: ['html-loader', 'pug-html-loader'],
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name][contenthash:8].[ext]',
          outputPath: 'assets/img',
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/images', to: 'images' },
        { from: 'public/data', to: 'data' },
      ],
    }),
    new StylelintPlugin(),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
      '@Images': path.resolve(__dirname, 'src/assets/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Icons': path.resolve(__dirname, 'src/components/Icons'),
      '@UI': path.resolve(__dirname, 'src/components/ui'),
      '@Scss': path.resolve(__dirname, 'src/assets/scss'),
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
  },
};
