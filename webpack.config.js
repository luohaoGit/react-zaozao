
var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var dev = true;

var entry = [
    path.resolve(__dirname, 'index.js')
];
var plugins = [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        mangle: true
    })
]

if(dev){
    entry = entry.concat(['webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080']);
    plugins = plugins.concat([new webpack.HotModuleReplacementPlugin(), new OpenBrowserPlugin({ url: 'http://localhost:8080' })]);
}

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, './'),
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.less$/,
                loader: 'style!css!autoprefixer!less'
            }, {
                test: /\.css/,
                loader: 'style!css'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    plugins: plugins
};