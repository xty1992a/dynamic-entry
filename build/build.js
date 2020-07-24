process.env.NODE_ENV = "production";
const entryFinder = require("./entryFinder");
const webpack = require("webpack");
const { root } = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = require("./webpack.config");

config.mode = process.env.NODE_ENV;

entryFinder()
  .then((entries) => {
    config.entry = {};

    entries.forEach((item) => {
      const { entryJs, name, templatePath } = item;
      config.entry[name] = entryJs;
      config.plugins.push(
        new HtmlWebpackPlugin({
          filename: root(`dist/${name}.html`),
          template: templatePath,
          inject: true,
          chunks: [name],
        })
      );
    });

    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.log(err);
        return;
      }

      console.log("compile success");
    });
  })
  .catch();
