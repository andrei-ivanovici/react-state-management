require("webpack");
const merge = require("webpack-merge");
const base = require("./webpack.config");
const config = {
    module: {
        rules: [
            {
                test: /module\.[s]?css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            localsConvention: "camelCase",
                            modules: {
                                mode: "local",
                                localIdentName: "[name]_[local]_[hash:base64:5]_"
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.[s]?css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /\.module.[s]?css$/
            }
        ]
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
};


module.exports = merge(base, config);
