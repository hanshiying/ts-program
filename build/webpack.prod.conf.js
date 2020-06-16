/* eslint-disable */
'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const PurifyCss = require('purifycss-webpack')
const glob = require('glob-all')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'js/[name].[chunkhash].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader,'css-loader'],
            }
        ]
    },
    devtool: false,

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /node_modules/,               
                },
                runtime: {
                    name: 'runtime',
                    minSize: 0,
                    minChunks: 2,                   
                    chunks: 'all'
                },
                common: {
                    name: 'common',
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2
                },           
                async: {
                    name: 'common-async',
                    chunks: 'async',
                    minChunks: 2
                }
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            // allChunks: true
        }),
        new PurifyCss({
            paths: glob.sync([
                '/dist/css/*.css'
            ])
        }),
        new OptimizeCssPlugin()
    ]
})