const HtmlWebpackPlugin = require('html-webpack-plugin')
const StylablePlugin = require('@stylable/webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     exclude: /\.d\.ts$/,
            //     loader: '@ts-tools/webpack-loader',
            //     options: {
            //         typeCheck: false
            //     }
            // },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // },
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin(),
        // new StylablePlugin()
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.json']
    },

}