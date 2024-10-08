module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
    custom_script: './src/custom_script.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    clean: true,
  },
}