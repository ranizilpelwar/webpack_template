const merge = require("webpack-merge");
const path = require("path");
const PROJECT_ROOT = path.resolve(__dirname);
const common = require(path.join(PROJECT_ROOT, "webpack.common.js"));

module.exports = merge(common, {
  devtool: "inline-source-map",
  entry: null,
  mode: "development",
  module: {
    rules: [
      {
        include: path.join(PROJECT_ROOT, "test"),
        loader: "babel-loader",
        test: /\.(js|jsx)$/
      }
    ]
  },
  resolve: {
    alias: {
      test: path.join(PROJECT_ROOT, "test")
    }
  }
});
