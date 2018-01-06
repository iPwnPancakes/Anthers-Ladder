let path = require('path');

module.exports = {
    entry: {
        './src/build/server': './src/server.js',
        './dist/browser': './dist/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.node$/,
                use: [
                    { loader: 'binary-loader' }
                ]
            }
        ],
        noParse: /ws/
    }
}