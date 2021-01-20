const path = require('path');
// entry -> output
module.exports = (env) => {
  console.log(env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/, // file ends with .js
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    // devtool: 'eval-cheap-module-source-map',
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    },
    // mode: 'development'
    mode: 'production'
  }
}