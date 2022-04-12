import * as path from "path";
import webpackNodeExternals from "webpack-node-externals";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import * as webpack from "webpack";

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
    fallback: {
      "os": false,
      "fs": false,
      "tls": false,
      "url": false,
      "net": false,
      "util": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "assert": false,
      "crypto": false,
      "crypto-browserify": false, //if you want to use this module also don't forget npm i crypto-browserify 
      // "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    } 
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

export default config;
