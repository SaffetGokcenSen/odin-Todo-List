const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js', 
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