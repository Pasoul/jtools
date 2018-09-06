const webpack = require("webpack");
const { resolve } = require("path");

const pkg = require("../package.json");
const rootPath = resolve(__dirname, "../");

const config = {
  mode: "production",
  entry: resolve(rootPath, "src", "index.js"),
  output: {
    filename: `${pkg.name}.min.js`,
    path: resolve(rootPath, "dist"),
    library: `${pkg.name}`,
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
      }
    ]
  }
};

module.exports = config;
