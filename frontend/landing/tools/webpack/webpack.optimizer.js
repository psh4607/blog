const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  new TerserPlugin({
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  }),
].filter(Boolean);
