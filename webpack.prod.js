const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require("terser-webpack-plugin");


module.exports = {
    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[contenthash].js',
    },
    module: {
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /style.css$/,
                use:[ MiniCssExtractPlugin.loader, 'css-loader']

            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',

            },
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', "@babel/preset-react",
                ]
                  }
                }
            }
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser(),
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack app',
            //filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[fullhash].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [ 
                {from: 'src/assets/', to: 'assets/'},
            ]
        })
    ]
};