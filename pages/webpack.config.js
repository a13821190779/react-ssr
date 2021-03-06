const path = require('path')

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'static')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}