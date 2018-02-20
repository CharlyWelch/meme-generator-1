/* eslint-env node */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const path = `${__dirname}/build`;

module.exports = {
    entry: './src/main.js',
    output: {
        path,
        filename: 'bundle.[hash].js',
    },
    devServer: {
        contentBase: './build',
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(`${path}/bundle.*.js`),
        new HtmlPlugin({ template: './src/index.html' }) 
    ],
    module: {
        rules: [
            {   
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};