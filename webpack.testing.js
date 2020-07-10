const path = require("path");
const PROJECT_ROOT = path.resolve(__dirname);

const common = require(path.join(PROJECT_ROOT, "webpack.common.js"));
const merge = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(common, {
  devtool: "source-map",
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify("testing")
    })
  ]
});
