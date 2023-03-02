const webpack = require('webpack');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const { inDev } = require('./webpack.helpers');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  inDev() && new webpack.HotModuleReplacementPlugin(),
  inDev() && new ReactRefreshWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    favicon: 'public/favicon.png',
    manifest: 'public/manifest.json',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
  }),
  new ESLintPlugin({
    // Plugin options
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    emitError: true,
    emitWarning: true,
    failOnError: false,
    failOnWarning: false,
    useEslintrc: true,
    cache: true,
  }),
].filter(Boolean);
