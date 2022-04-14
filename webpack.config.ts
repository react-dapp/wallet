import * as path from "path";
import webpackNodeExternals from "webpack-node-externals";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import * as webpack from "webpack";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

const config: webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "./src"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "./src"),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  externals: [webpackNodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "dappWallet",
      type: "umd",
    },
  },
  resolve: {
    modules: [path.resolve(__dirname, "/src"), "node_modules/"],
    descriptionFiles: ["package.json"],
    extensions: ["", ".js", ".ts", ".tsx", ".jsx"],
  },
  plugins: [new CleanWebpackPlugin(), new NodePolyfillPlugin()],
};

export default config;
