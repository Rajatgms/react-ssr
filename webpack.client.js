const path = require('path');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');

const clientConfig = {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(clientConfig, baseConfig);
