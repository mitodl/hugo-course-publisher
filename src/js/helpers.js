const fs = require("fs")
const cliProgress = require("cli-progress")

const directoryExists = directory => {
  return (
    directory &&
    fs.existsSync(directory) &&
    fs.lstatSync(directory).isDirectory()
  )
}

const newProgressBar = () => {
  return new cliProgress.SingleBar(
    {
      stopOnComplete: true,
      forceRedraw:    true
    },
    cliProgress.Presets.shades_classic
  )
}

module.exports = {
  directoryExists,
  newProgressBar
}
