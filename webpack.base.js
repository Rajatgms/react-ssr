module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          'presets': [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          'plugins': ['@babel/transform-runtime'],
        },
      }],
  },
};
