var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/main.js',
  module: {
    loaders: [
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['react','es2015','stage-0']
         }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'app.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
};
