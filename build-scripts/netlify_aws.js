const shell = require("shelljs")
require("dotenv").config()

const awsRegion = process.env["ENV_DEFAULT_REGION"]
const accessKeyId = process.env["ENV_ACCESS_KEY"]
const secretAccessKey = process.env["ENV_SECRET_ACCESS_KEY"]

shell.exec(`export AWS_REGION=${awsRegion}`)
shell.exec(`export AWS_ACCESS_KEY_ID=${accessKeyId}`)
shell.exec(`export AWS_SECRET_ACCESS_KEY=${secretAccessKey}`)

console.log(`aws region: ${awsRegion}`)
