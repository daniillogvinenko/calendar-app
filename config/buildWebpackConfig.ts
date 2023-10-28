import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildConfigOptions } from "./types/types";

export const buildWebpackConfig = ({
    paths,
    mode,
}: buildConfigOptions): webpack.Configuration => {
    const config: webpack.Configuration = {
        entry: paths.entry,
        mode,
        // много места съедает
        devtool: mode === "development" ? "inline-source-map" : undefined,
        output: {
            filename: "[hash:8].main.js",
            path: paths.output,
            clean: true,
        },
        module: {
            rules: buildLoaders(),
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: paths.htmlWebpackPlugin,
            }),
        ],
    };

    return config;
};
