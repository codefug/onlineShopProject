const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename:'index.html',
            inject:'head',
            scriptLoading:'defer'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(ttf|woff|woff2|eot|otf)$/i,
                type: 'asset/resource',
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
        ],
    },
};