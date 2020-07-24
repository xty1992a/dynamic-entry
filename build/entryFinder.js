const glob = require("glob");
const fs = require("fs");
const utils = require("./utils");

const dftTemplatePath = utils.root("public/template.html");
const dftTemplate = fs.readFileSync(dftTemplatePath, "utf-8");

module.exports = () =>
  new Promise((resolve, reject) => {
    // 读取入口
    glob("src/views/*/index.js", (err, files) => {
      if (err) return reject(err);
      // 获取入口
      const entries = files.map((entry) => {
        const name = entry.replace(/\.js$/, "").replace(/^src\/views\//, "");
        let template = dftTemplate;
        let templatePath = dftTemplatePath;
        try {
          template = fs.readFileSync(entry.replace(/\.js$/, ".html"), "utf-8");
          templatePath = entry.replace(/\.js$/, ".html");
        } catch (e) {}

        return {
          name,
          entryJs: utils.root(entry),
          template,
          templatePath,
        };
      });

      resolve(entries);
    });
  });
