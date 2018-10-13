const path = require('path');
const webpack = require('webpack'); 
const newHtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new newHtmlPlugin({
			template: path.resolve(__dirname, 'public/index.html')
		})
  ],
  devServer: {
    contentBase: './dist',
		hot: true,
		port: 3000,
		clientLogLevel: 'none'
  }
};