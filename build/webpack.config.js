const VueLoader = require("vue-loader/lib/plugin-webpack4");
const path = require("path");
const { src, root } = require("./utils");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PRODUCTION = process.env.NODE_ENV === "production";

const plugins = PRODUCTION ? [new CleanWebpackPlugin()] : [];

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {},
  output: {
    path: root("dist"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, ".."),
      assets: src("assets"),
      views: src("views"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            esModule: false,
            limit: PRODUCTION ? 8192 : undefined,
            name: "[name].[ext]",
          },
        },
      },
      {
        test: /\.less$/,
        use: ["style-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new VueLoader(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        NODE_ENV: process.env.NODE_ENV,
      }),
    }),
    ...plugins,
  ],
};
