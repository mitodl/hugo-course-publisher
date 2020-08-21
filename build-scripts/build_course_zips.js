const yargs = require("yargs")
const fs = require("fs")
const walk = require("walk")
const tmp = require("tmp")
tmp.setGracefulCleanup()
const rimraf = require("rimraf")
const archiver = require("archiver")
const path = require("path")
const shell = require("shelljs")

const { directoryExists, newProgressBar } = require("../src/js/helpers")

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

// clear out the distribution path and run the webpack build
rimraf.sync(distPath)
if (shell.exec("npm run build:webpack").code !== 0) {
  console.error("Webpack build failed")
  process.exit(1)
}

// remove existing zips
rimraf.sync(zipsPath)
fs.mkdirSync(zipsPath, { recursive: true })

// ensure dist and courses are directories that exist
if (!directoryExists(distPath) || !directoryExists(coursesPath)) {
  console.error(
    `Path not found - dist exists: ${directoryExists(
      distPath
    )} courses exists: ${directoryExists(coursesPath)}`
  )
  process.exit(1)
}

// gather files from the webpack build
let webpackFiles = []
walk.walk(distPath, {
  listeners: {
    file: (root, fileStats, next) => {
      // add each file to a list
      webpackFiles.push({
        root: root,
        name: fileStats.name
      })
      next()
    },
    end: () => {
      // filter out hidden files
      webpackFiles = webpackFiles.filter(file => !file.name.startsWith("."))
      const hugoProgress = newProgressBar()
      const archiveProgress = newProgressBar()
      let archiveStarted = false
      const courses = fs
        .readdirSync(coursesPath)
        .filter(course => !course.includes("."))
      if (courses.length <= 0) {
        console.error(`No courses found`)
        process.exit(1)
      }
      console.log("Generating Hugo sites...")
      hugoProgress.start(courses.length, 0)
      courses.forEach(course => {
        // run the hugo build
        const tmpDir = tmp.dirSync({
          prefix: "dist"
        }).name
        if (
          shell.exec(
            `hugo -d ${tmpDir} -s site --theme single_course --contentDir ${path.join(
              "..",
              coursesPath,
              course
            )} --quiet`
          ).code === 0
        ) {
          hugoProgress.increment()
          // create the archive
          const archive = archiver("zip")
          // add the webpack files
          webpackFiles.forEach(file => {
            archive.file(path.join(file.root, file.name), {
              name: path.join(
                file.root.replace(new RegExp(`${distPath}/?`, "g"), ""),
                file.name
              )
            })
          })
          // add the course files
          walk.walk(tmpDir, {
            listeners: {
              file: (root, fileStats, next) => {
                archive.file(path.join(root, fileStats.name), {
                  name: path.join(root.replace(tmpDir, ""), fileStats.name)
                })
                next()
              },
              end: () => {
                // walk seems to call this after all files have been added for every course
                if (!archiveStarted) {
                  console.log("Archiving courses...")
                  archiveProgress.start(courses.length, 1)
                  archiveStarted = true
                } else {
                  archiveProgress.increment()
                }
                const output = fs.createWriteStream(
                  path.join(zipsPath, `${course}.zip`)
                )
                archive.pipe(output)
                archive.finalize()
              }
            }
          })
        }
      })
    }
  }
})
