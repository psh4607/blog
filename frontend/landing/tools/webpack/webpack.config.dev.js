module.exports = {
	mode: 'development',
	entry: ['./src/index.tsx'],
	module: {
		rules: require('./webpack.rules'),
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},
	plugins: require('./webpack.plugins'),
	resolve: {
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '*.*', '.scss'],
		alias: require('./webpack.aliases'),
	},
	stats: 'errors-warnings',
	devtool: 'cheap-module-source-map',
	devServer: {
		open: true,
		host: 'localhost',
		port: 3000,
	},
	optimization: {
		minimize: false,
		splitChunks: {
			chunks: 'all',
		},
	},
	performance: {
		maxEntrypointSize: 512000, // 500KB
		maxAssetSize: 512000, // 500KB
		hints: false,
	},
};
