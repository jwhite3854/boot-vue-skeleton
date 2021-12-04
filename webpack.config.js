const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')


function resolveSrc(_path) {
    return path.join(__dirname, _path);
}

module.exports = {
    mode: 'development',
    entry: "../src/app.js",
    context: resolveSrc('src'),
    output: {
        path: resolveSrc('public'),
        filename: 'main.js',
        publicPath: '/',
        scriptType: 'module',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            src: resolveSrc('src')
        //  'chart.js': 'chart.js/dist/Chart.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};