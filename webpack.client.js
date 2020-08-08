const path = require('path');

module.exports = {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          'presets': [
            'react',
            'stage-0',
            ['env', { targets: { browser: ['last 2 versions'] } }]
          ]
        }

      }]
  }
}
