const fs = require("fs")
const path = require("path")
const homeDir = require("os").homedir()
require("dotenv").config()

const helpers = require("../src/js/helpers")

const awsRegion = process.env["ENV_DEFAULT_REGION"]
const accessKey = process.env["ENV_ACCESS_KEY"]
const secretAccessKey = process.env["ENV_SECRET_ACCESS_KEY"]
const awsDir = path.join(homeDir, ".aws")
if (!helpers.directoryExists(awsDir)) {
  fs.mkdirSync(awsDir, { recursive: true })
}
fs.writeFileSync(
  path.join(awsDir, "config"),
  `[default]\nregion=${awsRegion}\noutput=json\n`
)
fs.writeFileSync(
  path.join(awsDir, "credentials"),
  `[default]\naws_access_key_id=${accessKey}\naws_secret_access_Key=${secretAccessKey}\n`
)
