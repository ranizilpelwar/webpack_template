const path = require("path");
const PROJECT_ROOT = path.resolve(__dirname);

const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 9100
  },
  entry: path.join(PROJECT_ROOT, "app", "main.js"),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: [
          path.join(PROJECT_ROOT, "app", "main.js"),
          path.join(PROJECT_ROOT, "app", "scripts")
        ],
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        loader: "url-loader?limit=30000&name=[name]-[hash].[ext]",
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/
      },
      {
        test: /\.(gif)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    publicPath: "/"
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(PROJECT_ROOT, "app", "index.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      app: path.join(PROJECT_ROOT, "app"),
      scripts: path.join(PROJECT_ROOT, "app", "scripts"),
      store: path.join(PROJECT_ROOT, "app", "scripts", "store")
    },
    extensions: [".jsx", ".js", ".scss"]
  }
};
