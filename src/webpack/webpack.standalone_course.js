const path = require("path")
const { merge } = require("webpack-merge")

const prod = require("./webpack.prod.js")

module.exports = merge(prod, {
  output: {
    path:          path.join(__dirname, "../../../../static"),
  }
})
