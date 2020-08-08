module.exports = {
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
