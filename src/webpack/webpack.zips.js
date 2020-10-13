const path = require("path")
const { merge } = require("webpack-merge")
require("dotenv").config()

const common = require("./webpack.prod.js")

const envDistPath = process.env["COURSE_ZIPS_DIST_PATH"]
const distPath = path.isAbsolute(envDistPath) ?
  envDistPath :
  path.join(__dirname, "..", "..", envDistPath)

module.exports = merge(common, {
  output: {
    path: distPath
  }
})
