const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {        
        // path: path.resolve(__dirname, 'dist/assets'), // ---> For build ONLY !!
        filename: 'bundle.js',
        publicPath: '/mario/'
    },
    devServer: {
        port: 8085,
        static:
        {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/sara/'
        }
    },
    module: {
        rules:
            [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
            ]
    }
};