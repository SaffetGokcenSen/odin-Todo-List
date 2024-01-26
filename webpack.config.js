const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', 
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo Application',
        }),
    ],
    output: {
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist'),
    },
}