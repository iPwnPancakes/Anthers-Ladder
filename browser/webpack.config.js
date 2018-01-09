let path = require('path');

module.exports = {
    entry: {
        browser: './src/app.jsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist/'
    },
    resolve: {
        modules: ['./node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    },
    target: 'web'
}