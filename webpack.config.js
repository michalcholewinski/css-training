var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css"},
            {test: /\.html$/, loader: "raw-loader"}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
           template: 'index.html'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        })
    ]
};
