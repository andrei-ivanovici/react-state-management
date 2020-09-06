const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {NormalModuleReplacementPlugin} = webpack;
const helper = require("./build.utils");
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: "development",

    entry: {
        app: "./src/index.tsx"
    },

    output: {
        publicPath: "/",
        filename: "[name].js",
        path: helper.fromRoot("dist")
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },

    resolve: {
        plugins: [new TsconfigPathsPlugin({
            configFile : helper.fromRoot("tsconfig.json")
        })],
        extensions: [".ts", ".tsx", ".js"]
    },


    plugins: [
        new CleanWebpackPlugin(),
        new NormalModuleReplacementPlugin(/environment/, (resource) => {
            resource.request = `${resource.request}/environment.dev`;
        }),
        new HtmlWebpackPlugin({
            template: helper.fromRoot("./src/index.html")
        })
    ]
};
