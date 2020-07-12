require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
    mode: "production",
    output: {
        filename: "[name]-[hash].js",
    },
    module: {
        rules: [
            {
                test: /module\.[s]?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            localsConvention: "camelCase",
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.[s]?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                exclude: /\.module\.[s]?css$/
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css',
        }),
    ]
};

module.exports = merge(base, config);
