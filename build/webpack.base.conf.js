/* eslint-disable */
'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: './src/index.ts',
        test: './src/test.ts'
    },
    output: {
    },
    resolve: {
        extensions: ['.js','.ts','.tsx'],
        alias: {
            '@': './src'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['main']
        }),
    ]
}