const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { inDev } = require('./webpack.helpers');

module.exports = [
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
    ],
  },
  {
    // SCSS (SASS) Loader
    test: /\.s[ac]ss$/i,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'sass-loader' },
    ],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'less-loader' },
    ],
  },
  {
    // Assets loader
    // More information here https://webpack.js.org/guides/asset-modules/
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset',
    generator: {
      filename: 'assets/images/[hash][ext][query]',
    },
  },
  {
    // Html loader
    // More information here https://webpack.js.org/loaders/html-loader/
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
    ],
  },
  {
    // Babel Loader
    // More information here https://webpack.js.org/loaders/babel-loader/
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: ['last 2 versions', 'ie >= 11'],
              },
              useBuiltIns: 'usage',
              corejs: 3,
            },
          ],
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      },
    },
  },
];
