const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// entry -> output
module.exports = (env) => {
  console.log(env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/, // file ends with .js
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
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