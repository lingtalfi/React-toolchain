const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');




let moduleDir = path.join(__dirname, "my_module");
let srcDir = path.join(moduleDir, 'src');
let dstDir = path.join(moduleDir, 'dist');


module.exports = {
    entry: {
        main: [
            path.join(srcDir, 'index.js'),
            path.join(srcDir, 'css/style.scss'),
        ],
        theme1: [
            path.join(srcDir, 'js/themes/DefaultTheme.js'),
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: dstDir,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)/,
                use: [
                    "file-loader",
                ],
            },
        ]
    },
};