const fsPromises = require("fs").promises

const directoryExists = async directory => {
  try {
    return (await fsPromises.lstat(directory)).isDirectory()
  } catch (err) {
    return false
  }
}

module.exports = {
  directoryExists
}
