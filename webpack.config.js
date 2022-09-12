const { join, resolve } = require('path')

const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")

const isProd = process.env.NODE_ENV === 'production'
const isAnalyzing = process.env.WEBPACK_ANALYZING === 'true'

const PUBLIC_PATH = join(__dirname, 'public')

const config = {
	entry: './src/index.tsx',
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'react-is': resolve(__dirname, 'node_modules/react-is'),
		},
	},
	stats: 'errors-warnings',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.build.json'
						}
					}
				]
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			inject: 'body',
		}),
		new DuplicatePackageCheckerPlugin(),
		new DefinePlugin({
			'process.env.PUBLIC_PATH': PUBLIC_PATH
		})
	],
	performance: {
		assetFilter (assetFilename) {
		  return !assetFilename.endsWith('.wav');
		},
	},
}

if (isProd) {
	config.mode = 'production'
	config.optimization = {
		minimize: true,
		minimizer: [
			new TerserWebpackPlugin({
				minify: TerserWebpackPlugin.uglifyJsMinify,
			}),
			new ImageMinimizerPlugin({
				minimizer: {
				  implementation: ImageMinimizerPlugin.sharpMinify,
				  options: {
					encodeOptions: {
						jpeg: {
							quality: 100,
						},
						png: {
							quality: 100,
						},
					},
				  },
				},
			  })
		],
	}
	config.plugins.push(new CopyWebpackPlugin({
		patterns: [
			{
				from: 'public/*.{png,webmanifest,xml,icon,wav}',
				to: '[name][ext]',
			}
		]
	}))
} else {
	config.mode = 'development'
	config.devtool = 'inline-source-map'
	config.devServer = {
		port: 8080,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true
	}
}

if (isAnalyzing) {
	config.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config
