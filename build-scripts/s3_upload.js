const AWS = require("aws-sdk")
const yargs = require("yargs")
const fs = require("fs")
const walk = require("walk")
const tmp = require("tmp")
tmp.setGracefulCleanup()
const path = require("path")
require("dotenv").config()

const { newProgressBar } = require("../src/js/helpers")

// init progress bar
const progressBar = newProgressBar()
let totalFiles = 0
let uploadedFiles = 0

// get the path of the built site
const options = yargs.usage("Usage: -d <dist>").option("d", {
  alias:        "dist",
  describe:     "distribution path",
  type:         "string",
  demandOption: true
}).argv

const distPath = options.dist

// ensure proper environment variables are set
if (
  !process.env.AWS_STORAGE_BUCKET_NAME ||
  !process.env.AWS_ACCESS_KEY_ID ||
  !process.env.AWS_SECRET_ACCESS_KEY ||
  !process.env.DEPLOY_PRIME_URL
) {
  console.error(
    "AWS environment variables not properly set; please see README.md"
  )
  process.exit(1)
}

// define callbacks
const handleError = err => {
  console.error(err)
}

const handleUploadResult = (err, data) => {
  if (err) {
    console.error(err)
  }
  if (data) {
    uploadedFiles++
    progressBar.update(uploadedFiles)
  }
}

// upload the site
AWS.config = new AWS.Credentials({
  accessKeyId:     process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
const s3 = new AWS.S3()
const now = Date.now().toString()
progressBar.start(0, 0)
walk.walk(distPath, {
  listeners: {
    file: (root, fileStats, next) => {
      totalFiles++
      progressBar.setTotal(totalFiles)
      const filePath = path.join(root, fileStats.name)
      const fileStream = fs.createReadStream(filePath)
      fileStream.on("error", handleError)
      const awsKey = path.join(
        now,
        root.replace(new RegExp(`${distPath}/?`), ""),
        fileStats.name
      )
      const uploadParams = {
        Bucket: process.env.AWS_STORAGE_BUCKET_NAME,
        Key:    awsKey,
        Body:   fileStream
      }
      s3.upload(uploadParams, handleUploadResult)
      next()
    }
  }
})
