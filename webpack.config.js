const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        devtool: isProduction ? 'none' : 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/, // Transpile .js files
                    exclude: /node_modules/, // Exclude node_modules
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
                {
                    test: /\.css$/, // Load .css files
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [], // Plugins can be added here
    };
};