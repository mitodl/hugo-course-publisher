const fsPromises = require("fs").promises
const path = require("path")
const cliProgress = require("cli-progress")
const util = require("util")
const execFile = util.promisify(require("child_process").execFile)
const rimraf = util.promisify(require("rimraf"))
const tmp = require("tmp")
require("dotenv").config()

const { directoryExists, iterateTree } = require("../src/js/helpers")
const newProgressBar = () => {
  return new cliProgress.SingleBar(
    {
      stopOnComplete: true,
      forceRedraw:    true
    },
    cliProgress.Presets.shades_classic
  )
}

const distPath = "dist"
const coursesPath = "site/content/courses"
const zipsPath = process.env["COURSE_ZIPS_DESTINATION"] || "zips"
const staticAssetsPath = process.env["COURSE_ZIPS_STATIC_ASSET_PATH"]
let staticPrefix = process.env["COURSE_ZIPS_STATIC_PREFIX"]
if (staticPrefix) {
  staticPrefix = staticPrefix.startsWith("/") ?
    staticPrefix.substring(1) :
    staticPrefix
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
    throw new Error(
      "zips path must not be within hugo course area, two parent directories above courses directory"
    )
  }

  await rimraf(distPath)
  const { error } = await execFile("npm", ["run", "build:webpack"])
  if (error) {
    throw error
  }

  // remove existing zips
  await rimraf(zipsPath)
  await fsPromises.mkdir(zipsPath, { recursive: true })

  // ensure dist and courses are directories that exist
  const distExists = await directoryExists(distPath)
  const coursesExists = await directoryExists(coursesPath)
  if (!distExists || !coursesExists) {
    throw new Error(
      `Path not found - dist exists: ${distExists} courses exists: ${coursesExists}`
    )
  }

  const hugoProgress = newProgressBar()
  const courses = []
  for (const filename of await fsPromises.readdir(coursesPath)) {
    const absPath = path.join(coursesPath, filename)
    if (
      !filename.startsWith(".") &&
      (await fsPromises.lstat(absPath)).isDirectory()
    ) {
      courses.push(filename)
    }
  }

  if (courses.length <= 0) {
    console.error(`No courses found`)
    process.exit(1)
  }
  console.log("Generating Hugo sites...")

  const webpackFiles = []
  for await (const { root, relPath, file } of iterateTree(distPath)) {
    if (!file.startsWith(".")) {
      webpackFiles.push({ root, relPath, file })
    }
  }

  hugoProgress.start(courses.length, 0)
  for (const course of courses) {
    // run the hugo build
    const tmpDir = tmp.dirSync({
      prefix: "dist"
    }).name
    try {
      const { error } = await execFile("hugo", [
        "-d",
        tmpDir,
        "-s",
        "site",
        "--config",
        "config_zip.toml",
        "--contentDir",
        path.join("..", coursesPath, course)
      ])
      if (error) {
        throw error
      }

      // create the archive

      // add the webpack files
      for (const { root, relPath, file } of webpackFiles) {
        await fsPromises.mkdir(path.join(tmpDir, relPath), { recursive: true })
        await fsPromises.copyFile(
          path.join(root, relPath, file),
          path.join(tmpDir, relPath, file)
        )
      }
      // add the course files
      const courseRoot = path.join(coursesPath, course)
      for await (const { relPath, file } of iterateTree(courseRoot)) {
        await fsPromises.mkdir(path.join(tmpDir, relPath), { recursive: true })
        await fsPromises.copyFile(
          path.join(courseRoot, relPath, file),
          path.join(tmpDir, relPath, file)
        )
      }
      // add static assets
      if (await directoryExists(staticAssetsPath)) {
        const staticOutputPath = staticPrefix ?
          path.join(tmpDir, staticPrefix) :
          path.join(tmpDir)
        if (!(await directoryExists(staticOutputPath))) {
          await fsPromises.mkdir(staticOutputPath, { recursive: true })
        }
        const courseStaticRoot = path.join(staticAssetsPath, course)
        for await (const { relPath, file } of iterateTree(courseStaticRoot)) {
          if (
            !(
              RegExp("^[0-9a-f]{32}_master.json").test(file) ||
              file === "master.json" ||
              file.includes(".html")
            )
          ) {
            await fsPromises.copyFile(
              path.join(courseStaticRoot, relPath, file),
              path.join(staticOutputPath, relPath, file)
            )
          }
        }
      }

      const zipPath = path.resolve(zipsPath, `${course}.zip`)
      const { error: zipError } = await execFile(
        "zip",
        [zipPath, ".", "-r", "-q"],
        { cwd: tmpDir }
      )
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
