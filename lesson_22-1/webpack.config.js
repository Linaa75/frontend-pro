import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env, { mode = "development" }) => {
    const isProd = mode === 'production';

    return {
        mode,
        entry: resolve(__dirname, "src", "app.js"),
        devtool: !isProd ? "source-map" : false,
        output: {
            path: resolve(__dirname, "dist"),
            filename: "index.js",
        },
        module: {
            rules: [
                {
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                            sourceMap: !isProd,
                            },
                        },
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /node_modules/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                            sourceMap: true,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                            sassOptions: {
                                style: `compressed`,
                                sourceMap: true,
                                quietDeps: true,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/,
                    type: "asset",
                  },
                ],
            },
            optimization: {
                chunkIds: "named",
                splitChunks: {
                chunks: "all",
                },
            },
            plugins: [
                new HtmlWebpackPlugin({
                title: "Webpack lesson_22",
                scriptLoading: "defer",
                minify: true,
                template: resolve(__dirname, "src", "view", "index.html"),
                }),
            new CopyPlugin({
                patterns: [
                {
                    from: resolve(__dirname, "src", "public"),
                    to: resolve(__dirname, "dist"),
                },
                ],
            }),
            new ESLintPlugin(),
            ],
    };
};