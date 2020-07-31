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
const zipsPath = path.join("site", "static", "zips")

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
        const hugoProgress = new cliProgress.SingleBar({
          stopOnComplete: true,
          forceRedraw: true
        }, cliProgress.Presets.shades_classic)
        const archiveProgress = new cliProgress.SingleBar({
          stopOnComplete: true,
          forceRedraw: true
        }, cliProgress.Presets.shades_classic)
        let archiveStarted = false
        const courses = fs
          .readdirSync(coursesPath)
          .filter(course => !course.includes("."))
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
                  if (!archiveStarted) {
                    console.log("Archiving courses...")
                    archiveProgress.start(courses.length, 1)
                    archiveStarted = true
                  }
                  else {
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
}
