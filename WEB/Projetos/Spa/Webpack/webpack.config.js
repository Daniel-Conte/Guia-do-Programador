const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: './assets/js/app.min.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: '/paginas/cursos.html',
            template: './src/paginas/cursos.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: '/paginas/inicio.html',
            template: './src/paginas/inicio.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: '/paginas/sobre.html',
            template: './src/paginas/sobre.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: '/paginas/suporte.html',
            template: './src/paginas/suporte.html',
            inject: false
        }),

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
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                name: 'logo.png',
                outputPath: '/assets/imgs'
            }
        }, {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/fonts'
            }
        }]
    }
}