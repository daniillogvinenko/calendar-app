export interface EnvironmentalVariables {
    mode: "production" | "development";
}

export interface buildConfigOptions {
    mode: "production" | "development";
    paths: buildConfigPaths;
}

export interface buildConfigPaths {
    entry: string;
    output: string;
    htmlWebpackPlugin: string;
}
