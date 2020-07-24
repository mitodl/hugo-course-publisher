const fs = require("fs")
const walk = require("walk")
const tmp = require("tmp")
const rimraf = require("rimraf")
const archiver = require("archiver")
const path = require("path")
// const AWS = require("aws-sdk")
// const env = require("dotenv").config().parsed
const cliProgress = require("cli-progress")

const { directoryExists } = require("../src/js/helpers")

const distPath = "dist"
const coursesPath = path.join(distPath, "courses")
const zipsPath = "zips"

rimraf.sync(zipsPath)
fs.mkdirSync(zipsPath, { recursive: true })

if (directoryExists(distPath) && directoryExists(coursesPath)) {
  let baseSiteFiles = []
  // walk the built site path, filtering out course specific files
  walk.walk(distPath, {
    filters:   [coursesPath],
    listeners: {
      file: (root, fileStats, next) => {
        // add each file to a list
        baseSiteFiles.push({
          root: root,
          name: fileStats.name
        })
        next()
      },
      end: () => {
        // filter out hidden files
        baseSiteFiles = baseSiteFiles.filter(file => !file.name.startsWith("."))
        const progressBar = new cliProgress.SingleBar(
          { stopOnComplete: true },
          cliProgress.Presets.shades_classic
        )
        // find and iterate courses
        const courses = fs
          .readdirSync(coursesPath)
          .filter(course => !course.includes("."))
        progressBar.start(courses.length, 0)
        courses.forEach(course => {
          // create the archive
          const archive = archiver("zip")
          // add the base site files
          baseSiteFiles.forEach(file => {
            archive.file(path.join(file.root, file.name))
          })
          // add the course files
          walk.walk(path.join(coursesPath, course), {
            listeners: {
              file: (root, fileStats, next) => {
                archive.file(path.join(root, fileStats.name))
                next()
              },
              end: () => {
                const output = fs.createWriteStream(
                  path.join(zipsPath, `${course}.zip`)
                )
                archive.pipe(output)
                archive.finalize()
                progressBar.increment()
              }
            }
          })
        })
      }
    }
  })
}
