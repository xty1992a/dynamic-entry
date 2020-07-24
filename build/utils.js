const path = require("path");

module.exports = {
  root: (p) => path.resolve(__dirname, "..", p),
  src: (p) => path.resolve(__dirname, "../src", p),
};
