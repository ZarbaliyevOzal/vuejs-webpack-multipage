const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require("vue-loader");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/index.js?hash=[contenthash]'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
        // liveReload: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1}
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/assets/images", to: "assets/images" }
            ],
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/styles.css?hash=[contenthash]'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/detailed-search.html',
            filename: 'detailed-search.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/results.html',
            filename: 'results.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/result.html',
            filename: 'result.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/new-advertisement.html',
            filename: 'new-advertisement.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/login.html',
            filename: 'login.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/register.html',
            filename: 'register.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/forgot.html',
            filename: 'forgot.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/reset-password.html',
            filename: 'reset-password.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/verify.html',
            filename: 'verify.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/profile.html',
            filename: 'profile.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/my-ads.html',
            filename: 'my-ads.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/edit-ad.html',
            filename: 'edit-ad.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/contact.html',
            filename: 'contact.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/about-us.html',
            filename: 'about-us.html',
            minify: false
        }),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    }
}