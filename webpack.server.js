const path = require('path')

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
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
