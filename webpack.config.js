module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/static',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                ignore: /node_modules/
            }
        ]
    }
}
