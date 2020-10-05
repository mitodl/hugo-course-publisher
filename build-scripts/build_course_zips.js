const yargs = require("yargs")
const fsPromises = require("fs").promises
const path = require("path")
const cliProgress = require("cli-progress")
const util = require('util')
const execFile = util.promisify(require('child_process').execFile)
const rimraf = util.promisify(require("rimraf"))
const tmp = require("tmp")

const { directoryExists } = require("../src/js/helpers")
const newProgressBar = () => {
  return new cliProgress.SingleBar(
    {
      stopOnComplete: true,
      forceRedraw:    true
    },
    cliProgress.Presets.shades_classic
  )
}

const options = yargs
  .usage("Usage: -d <dist> -c <courses> -z <zips>")
  .option("d", {
    alias:        "dist",
    describe:     "distribution path",
    type:         "string",
    demandOption: true
  })
  .option("c", {
    alias:        "courses",
    describe:     "course markdown path",
    type:         "string",
    demandOption: true
  })
  .option("z", {
    alias:        "zips",
    describe:     "zip output path",
    type:         "string",
    demandOption: true
  }).argv

const distPath = options.dist
const coursesPath = options.courses
const zipsPath = options.zips


// Walk a tree and produce { root, relPath, file } for each file found
async function* iterateTree(rootPath, relPath = ".") {
  const files = await fsPromises.readdir(path.join(rootPath, relPath))
  for (const file of files) {
    const absFile = path.join(rootPath, relPath, file)
    const stat = await fsPromises.lstat(absFile)
    if (stat.isDirectory()) {
      for await (const item of iterateTree(rootPath, path.join(relPath, file))) {
        yield item
      }
    } else if (stat.isFile()) {
      yield { root: rootPath, relPath, file }
    }
  }
}

// clear out the distribution path and run the webpack build
const run = async () => {
  if ((await execFile("which", ["zip"])).error) {
    throw new Error("Unable to find zip binary")
  }

  const baseDir = path.resolve(coursesPath, "..", "..")
  const relative = path.relative(baseDir, zipsPath)
  if (relative && !relative.startsWith("..") && !path.isAbsolute(relative)) {
    // make sure zips are not picked up by hugo, causing a blowup in file size
    throw new Error("zips path must not be within hugo course area, two parent directories above courses directory")
  }

  await rimraf(distPath)
  const { error } = await execFile("npm", ["run", "build:webpack"])
  if (error) {
    throw error
  }

  // remove existing zips
  await rimraf(zipsPath)
  await fsPromises.mkdir(zipsPath, {recursive: true})

  // ensure dist and courses are directories that exist
  const distExists = await directoryExists(distPath)
  const coursesExists = await directoryExists(coursesPath)
  if (!distExists || !coursesExists) {
    throw new Error(
      `Path not found - dist exists: ${distExists} courses exists: ${coursesExists}`
    )
  }

  const hugoProgress = newProgressBar()
  const courses = (await fsPromises.readdir(coursesPath))
    // TODO: what is this for? Are we excluding any course with a dot when we just want to exclude . and ..?
    .filter(course => !course.includes("."))

  if (courses.length <= 0) {
    console.error(`No courses found`)
    process.exit(1)
  }
  console.log("Generating Hugo sites...")

  const webpackFiles = []
  for await (const { root, relPath, file} of iterateTree(distPath)) {
    if (!file.startsWith(".")) {
      webpackFiles.push({root, relPath, file})
    }
  }

  hugoProgress.start(courses.length, 0)
  for (const course of courses) {
    // run the hugo build
    const tmpDir = tmp.dirSync({
      prefix: "dist"
    }).name
    try {
      const {error} = await execFile("hugo", [
        "-d", tmpDir, "-s", "site", "--theme", "single_course", "--contentDir", path.join("..", coursesPath, course)
      ])
      if (error) {
        throw error
      }

      // create the archive

      // add the webpack files
      for (const {root, relPath, file} of webpackFiles) {
        await fsPromises.mkdir(path.join(tmpDir, relPath), {recursive: true})
        await fsPromises.copyFile(path.join(root, relPath, file), path.join(tmpDir, relPath, file))
      }
      // add the course files

      const courseRoot = path.join(coursesPath, course)
      for await (const { relPath, file} of iterateTree(courseRoot)) {
        await fsPromises.mkdir(path.join(tmpDir, relPath), {recursive: true})
        await fsPromises.copyFile(path.join(courseRoot, relPath, file), path.join(tmpDir, relPath, file))
      }

      const zipPath = path.resolve(zipsPath, `${course}.zip`)
      const {error: zipError} = await execFile("zip", [zipPath, ".", "-r", "-q"], {cwd: tmpDir})
      if (zipError) {
        throw zipError
      }
      hugoProgress.increment()
    } finally {
      await rimraf(tmpDir)
    }
  }
}

run().catch(err => {
  console.error("Error:", err)
  process.exit(1)
})
