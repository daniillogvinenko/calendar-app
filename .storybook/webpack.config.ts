import path from "path";
import webpack from "webpack";
import type {
    EnvironmentalVariables,
    buildConfigPaths,
} from "../config/types/types";
import { buildLoaders } from "../config/buildLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: buildConfigPaths = {
        entry: "",
        htmlWebpackPlugin: "",
        output: "",
        src: path.resolve(__dirname, "..", "src"),
    };

    config.module?.rules?.push({
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            Boolean(resPath.includes(".module.")),
                        localIdentName:
                            "[path][name]__[local]--[hash:base64:5]",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    });

    config.resolve = {
        extensions: [".tsx", ".ts", ".js"],
        // абсолютные пути
        preferAbsolute: true,
        modules: [paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };

    return config;
};
