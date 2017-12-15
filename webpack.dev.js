const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        host: 'localhost',
        publicPath: "/",
        contentBase: "./public",
        hot: true
    }
});
