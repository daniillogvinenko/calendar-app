import path from "path";
import webpack, { RuleSetRule } from "webpack";
import type { buildConfigPaths } from "../config/types/types";

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

    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules?.push({
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
    });

    config.resolve = {
        extensions: [".tsx", ".ts", ".js"],
        // абсолютные пути
        preferAbsolute: true,
        modules: [paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };

    config.plugins?.push(
        new webpack.DefinePlugin({
            _IS_DEV_: true,
        })
    );

    return config;
};
