const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	context: path.join(__dirname, '../client/'),
	entry: {
		home: ['./home/'],
		default: ['./default'],
		about: ['./about'],
		visor: ['./visor'],
		informes: ['./informes'],
		descargas: ['./descargas'],
		metodologia: ['./metodologia'],
		participa: ['./participa'],
		denuncia: ['./denuncia'],
	},
	output: {
		filename: 'js/[name].js',
		path: path.join(__dirname, '../public'),
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'eslint-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['**/js', '**/styles'],
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
