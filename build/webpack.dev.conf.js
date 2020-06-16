'use strict'
const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const FriendlyErrorsPlugin = require('friendly-errors-plugin')

const HOST = process.env.host || 'localhost'
const PORT = process.env.port || 8080
const publicPath = ''

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: '[name].js',
        publicPath
    },
    module: {
        rules: [
            {
                test: /\.css/,
                loader: ['style-loader','css-loader'],
            }
        ]
    },

    devtool: '#cheap-module-eval-source-map',

    devServer: {
        host: HOST,
        port: PORT,
        contentBase: path.resolve(__dirname,'..'),
        publicPath,
        proxy: {},
        // open: true,
        compress: true,
        quiet: true,
        historyApiFallback: {
            index: publicPath
        }
    },

    plugins: [
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
              messages: [`Your application is running here: http://${HOST}:${PORT}`],
            }
        })
    ]
})