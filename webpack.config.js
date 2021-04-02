const path = require('path');

module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    }
};