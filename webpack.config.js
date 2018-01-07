let path = require('path');

module.exports = {
    entry: {
        './dist/browser': ["babel-polyfill", "./dist/index.js"]
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['env'] } }
        ],
        noParse: /ws|.node/
    }
}