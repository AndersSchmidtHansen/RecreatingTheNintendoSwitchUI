const path = require('path');

module.exports = {
  entry: {
    '01_lockscreen': './src/01_lockscreen/main.ts',
    '02_main_menu': './src/02_main_menu/main.ts',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]/main.js'
  }
};