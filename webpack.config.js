const CleanWebpackPlugin = require('clean-webpack-plugin');


const build = `${__dirname}/build`;

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: build,
    },
    plugins: [
        new CleanWebpackPlugin(build),
    ]

}