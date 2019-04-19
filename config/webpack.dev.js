const common = require('./webpack.common');
const merge = require('webpack-merge');
const hotMiddleware = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&noInfo=true';

for (const entry in common.entry) {
	if (common.entry.hasOwnProperty(entry)) {
		common.entry[entry].push(hotMiddleware);
	}
}

module.exports = merge(common, {
	stats: 'errors-only',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	output: {
		publicPath: '/',
	},
});
