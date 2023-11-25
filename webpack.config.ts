import path from "path";
import type { EnvironmentalVariables } from "./config/types/types";
import { buildWebpackConfig } from "./config/buildWebpackConfig";

export default (env: EnvironmentalVariables) => {
    const config = buildWebpackConfig({
        mode: env.mode,
        paths: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            output: path.resolve(__dirname, "build"),
            htmlWebpackPlugin: path.resolve(__dirname, "public", "index.html"),
            src: path.resolve(__dirname, "src"),
            locales: path.resolve(__dirname, "public", "locales"),
            buildLocales: path.resolve(__dirname, "build", "locales"),
        },
    });
    return config;
};
