module.exports = {
  entry: './js/Main.js',
  output: { path: __dirname, filename: 'bundle.js'},
  devServer: {
    inline: true,
    port: 8888
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
}
