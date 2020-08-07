const fs = require("fs")

const directoryExists = directory => {
  return (
    directory &&
    fs.existsSync(directory) &&
    fs.lstatSync(directory).isDirectory()
  )
}

module.exports = {
  directoryExists
}
