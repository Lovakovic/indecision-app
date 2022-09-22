const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
           
            /*  Try this syntax instead of loader: 'babel-loader'
            use: {
                loader: 'babel-loader'
            } 
            */
        }]
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 8080,
        open: true,
        hot: true
    },
};