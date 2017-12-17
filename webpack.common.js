const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack')

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [
            new ExtractTextPlugin( "bundle.css" )
        ],
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                exclude: [/node_modules/, /public/],
                include: path.join(__dirname, 'src'),
                use: ['babel-loader'/*, 'eslint-loader'*/]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            minimize: true,
                            sourceMap: true
                        }
                    }, 
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                  ]
                })
              },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
              },
              { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
              { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
              { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
              { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
              { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
              { test: /\.json$/, loader: 'json-loader' },

        ]
    }
};
