const { override, addWebpackPlugin } = require('customize-cra');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CriticalCssPlugin = require('critical-css-webpack-plugin');

module.exports = override(
  addWebpackPlugin(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ),
  addWebpackPlugin(
    new CriticalCssPlugin({
      base: 'build/',
      src: 'index.html',
      target: 'index.html',
      inline: true,
      extract: true,
      width: 1300,
      height: 900,
      penthouse: {
        blockJSRequests: false,
      },
    })
  )
); 