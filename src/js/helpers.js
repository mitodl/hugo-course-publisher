const fsPromises = require("fs").promises
const path = require("path")

// Walk a tree and produce { root, relPath, file } for each file found
async function* iterateTree(rootPath, relPath = ".") {
  const files = await fsPromises.readdir(path.join(rootPath, relPath))
  for (const file of files) {
    const absFile = path.join(rootPath, relPath, file)
    const stat = await fsPromises.lstat(absFile)
    if (stat.isDirectory()) {
      for await (const item of iterateTree(
        rootPath,
        path.join(relPath, file)
      )) {
        yield item
      }
    } else if (stat.isFile()) {
      yield { root: rootPath, relPath, file }
    }
  }
}

const directoryExists = async directory => {
  try {
    return (await fsPromises.lstat(directory)).isDirectory()
  } catch (err) {
    return false
  }
}

module.exports = {
  directoryExists,
  iterateTree
}
