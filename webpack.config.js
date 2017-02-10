const webpack = require('webpack');
module.exports = {
    entry: [
        // 写在入口文件之前
        "webpack-dev-server/client?http://127.0.0.1:8080",
        // "webpack/hot/only-dev-server",
        // 这里是你的入口文件
        "./src/app.tsx",
    ],
    output: {
        path: './public/',
        filename: 'bundle.js',
        publicPath: "http://127.0.0.1:8080/public/",
    },
    devtool: 'cheap-source-map', //显示出错代码位置 //source-map
    module: {
        loaders: [
            { test: /\.svg\??.*$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=[name].[ext]' },
            { test: /\.woff\??.*$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=[name].[ext]' },
            { test: /\.woff2\??.*$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=[name].[ext]' },
            { test: /\.[ot]tf\??.*$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=[name].[ext]' },
            { test: /\.eot\??.*$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=[name].[ext]' },
            { test: /\.png$/, loader: "url?mimetype=image/png" },
            {
                test: /(\.jsx?$)|(\.tsx?)/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader?presets[]=react,presets[]=es2015,presets[]=es2016,presets[]=es2017,compact=false', 'ts-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
        }),//这样不用每个文件都引入react，因为babel会把es6转换为React.createClass
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        })//环境替换

    ]
}