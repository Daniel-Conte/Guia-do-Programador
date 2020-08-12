const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: './assets/js/app.min.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '/assets/css/app.min.css'
        }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6
            }
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [ 'file-loader' ]
        }]
    }
}