var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/main.js',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
     },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
     },
     { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?$=jquery' }
    ],
    loaders: [
      {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['react','es2015','stage-0'],
           plugins: ['react-html-attrs']
         }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'app.min.js'
  },
  plugins: debug ? [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devServer: {
    contentBase: './client',
    hot: true
  }
};
