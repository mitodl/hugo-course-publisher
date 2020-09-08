const fs = require("fs")
const path = require("path")
require("dotenv").config()

const awsRegion = process.env["ENV_DEFAULT_REGION"]
const accessKey = process.env["ENV_ACCESS_KEY"]
const secretAccessKey = process.env["ENV_SECRET_ACCESS_KEY"]
fs.writeFileSync(path.join("~", ".aws", "config"), `[default]\nregion=${awsRegion}\noutput=json`)
fs.writeFileSync(path.join("~", ".aws", "credentials"), `[default]\naws_access_key_id=${accessKey}\naws_secret_access_Key=${secretAccessKey}`)
