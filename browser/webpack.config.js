let path = require('path');

module.exports = {
    entry: {
        browser: './dist/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist/'
    },
    resolve: {
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, 'dist'),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
        noParse: /ws|.node/
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    },
    target: 'web'
}