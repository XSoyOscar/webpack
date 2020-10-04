const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src','js','index.js')
    },
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 90000,
                    }
                }
                    
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Babel',
            template: path.resolve(__dirname, 'index.html')
        }),
    ]
}