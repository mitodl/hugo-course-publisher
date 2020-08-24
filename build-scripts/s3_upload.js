const AWS = require("aws-sdk")
const yargs = require("yargs")
const fs = require("fs")
const walk = require("walk")
const tmp = require("tmp")
tmp.setGracefulCleanup()
const path = require("path")
require("dotenv").config()

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
  console.log(data)
}

// configure aws-sdk
AWS.config = new AWS.Credentials({
  accessKeyId:     process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
const s3 = new AWS.S3()
const bucketParams = { Bucket: process.env.AWS_STORAGE_BUCKET_NAME }

// define s3 functions

const deleteAllObjectsFromS3Bucket = async (s3, params) => {
  const data = await s3.listObjectsV2(params).promise()
  const objectCount = data.Contents.length
  const deleteParams = {
    Bucket: params.Bucket,
    Delete: {
      Objects: data.Contents.map(o => ({ Key: o.Key })),
      Quiet:   false
    }
  }
  if (objectCount > 0) {
    await s3.deleteObjects(deleteParams).promise()
    if (data.IsTruncated && data.NextContinuationToken) {
      params.ContinuationToken = data.NextContinuationToken
      await deleteAllObjectsFromS3Bucket(s3, params)
    }
  }
}

const uploadSite = async (s3, params) => {
  console.log("Clearing bucket...")
  await deleteAllObjectsFromS3Bucket(s3, params)
  walk.walk(distPath, {
    listeners: {
      file: async (root, fileStats, next) => {
        const filePath = path.join(root, fileStats.name)
        const fileStream = fs.createReadStream(filePath)
        fileStream.on("error", handleError)
        const awsKey = path.join(
          root.replace(new RegExp(`${distPath}/?`), ""),
          fileStats.name
        )
        const uploadParams = {
          Bucket: params.Bucket,
          Key:    awsKey,
          Body:   fileStream
        }
        await s3.upload(uploadParams).promise()
        console.log(`Uploaded ${awsKey}`)
        next()
      },
      end: () => {
        console.log("Upload Complete")
      }
    }
  })
}

// upload the site
deleteAllObjectsFromS3Bucket(s3, bucketParams).then(() => {
  uploadSite(s3, bucketParams)
})
