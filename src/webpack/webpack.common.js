const webpack = require("webpack")
const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const AssetsPlugin = require("assets-webpack-plugin")
const babelSharedLoader = require("../babel_config").babelSharedLoader

module.exports = {
  entry: {
    main:           ["@babel/polyfill", path.join(__dirname, "..", "index.js")],
    pdfjs:  "pdfjs-dist/build/pdf.js",
    "pdf.worker":   "pdfjs-dist/build/pdf.worker.entry.js"
  },

  output: {
    path: path.join(__dirname, "../../dist")
  },

  module: {
    rules: [
      {
        test: /\.(jpg)|(png)|(svg)|(gif)$/,
        use:  [
          {
            loader:  "file-loader",
            options: {
              name: "images/[hash].[ext]"
            }
          }
        ]
      },

      {
        test: /\.(woff|ttf|woff2|eot)$/,
        use:  [
          {
            loader:  "file-loader",
            options: {
              name: "fonts/[hash].[ext]"
            }
          }
        ]
      },

      { test: /\.json$/, loader: "json-loader" },

      babelSharedLoader,

      {
        test: /\.(sa|sc|c)ss$/,
        use:  [
          "style-loader",
          {
            loader:  MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
              hmr:        process.env.NODE_ENV !== "production"
            }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch:
        "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    }),

    new AssetsPlugin({
      filename:    "webpack.json",
      path:        path.join(process.cwd(), "site/data"),
      prettyPrint: true
    }),

    new CopyWebpackPlugin([
      {
        from:    "./src/fonts/",
        to:      "fonts/",
        flatten: true
      }
    ]),

    new webpack.ProvidePlugin({
      $:               "jquery",
      jQuery:          "jquery",
      "window.jQuery": "jquery",
      Popper:          "popper.js/dist/umd/popper"
    })
  ]
}
