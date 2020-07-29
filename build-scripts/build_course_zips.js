const fs = require("fs")
const walk = require("walk")
const tmp = require("tmp")
tmp.setGracefulCleanup()
const rimraf = require("rimraf")
const archiver = require("archiver")
const path = require("path")
const cliProgress = require("cli-progress")
const shell = require("shelljs")

const { directoryExists } = require("../src/js/helpers")

const distPath = "dist"
const coursesPath = path.join("site", "content", "courses")
const zipsPath = "zips"

rimraf.sync(zipsPath)
fs.mkdirSync(zipsPath, { recursive: true })

if (directoryExists(distPath) && directoryExists(coursesPath)) {
  let webpackFiles = []
  // gather files from the webpack build
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
          // run the hugo build
          const tmpDir = tmp.dirSync({
            prefix: "dist"
          }).name
          tmpDir.setGr
          if (
            shell.exec(
              `hugo -d ${tmpDir} -s site --theme single_course --contentDir ${path.join(
                "..",
                coursesPath,
                course
              )} --quiet`
            ).code === 0
          ) {
            const files = fs.readdirSync(tmpDir)
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
                  const output = fs.createWriteStream(
                    path.join(zipsPath, `${course}.zip`)
                  )
                  archive.pipe(output)
                  archive.finalize()
                  progressBar.increment()
                }
              }
            })
          }
        })
      }
    }
  })
}
