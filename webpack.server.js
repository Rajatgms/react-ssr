const path = require('path');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
  target: 'node',
  entry: './src/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(serverConfig, baseConfig);
