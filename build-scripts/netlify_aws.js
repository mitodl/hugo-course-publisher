const AWS = require("aws-sdk")
const fs = require("fs")
const { downloadCourseRecursive } = require("@mitodl/ocw-to-hugo/src/aws_sync")
require("dotenv").config()

const awsRegion = process.env["ENV_DEFAULT_REGION"]
const accessKeyId = process.env["ENV_ACCESS_KEY"]
const secretAccessKey = process.env["ENV_SECRET_ACCESS_KEY"]
AWS.config = new AWS.Config({
  region:      awsRegion,
  credentials: new AWS.Credentials({
    accessKeyId:     accessKeyId,
    secretAccessKey: secretAccessKey
  })
})

const s3 = new AWS.S3()
const courses = JSON.parse(fs.readFileSync("example_courses.json"))["courses"]
const totalCourses = courses.length
console.log(`Downloading ${totalCourses} courses from AWS...`)
courses.map(async course => {
  const bucketParams = {
    Bucket: process.env["AWS_BUCKET_NAME"],
    Prefix: course
  }
  await downloadCourseRecursive(s3, bucketParams, "private/courses")
  console.log(`${course} downloaded...`)
})
