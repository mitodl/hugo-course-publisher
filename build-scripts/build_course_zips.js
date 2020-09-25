const yargs = require("yargs")
const fs = require("fs")
const walkSync = require("walk-sync")
const tmp = require("tmp")
tmp.setGracefulCleanup()
const rimraf = require("rimraf")
const archiver = require("archiver")
const path = require("path")
const cliProgress = require("cli-progress")
const shell = require("shelljs")

const { directoryExists } = require("../src/js/helpers")

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
  })
  .option("staticAssets", {
    describe:     "path to static assets",
    type:         "string",
    demandOption: false
  })
  .option("staticPrefix", {
    describe:     "the static prefix used in ocw-to-hugo",
    type:         "string",
    demandOption: false
  }).argv

const distPath = options.dist
const coursesPath = options.courses
const zipsPath = options.zips
const staticAssetsPath = options.staticAssets
const staticPrefix =
  options.staticPrefix[0] === "/" ?
    options.staticPrefix.substring(1) :
    options.staticPrefix

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
let webpackFiles = walkSync(distPath)
// filter out hidden files
webpackFiles = webpackFiles.filter(
  file =>
    !file
      .split("/")
      .pop()
      .startsWith(".")
)
const totalWebpackFiles = webpackFiles.length
const hugoProgress = new cliProgress.SingleBar(
  {
    stopOnComplete: true,
    forceRedraw:    true
  },
  cliProgress.Presets.shades_classic
)
const multiBar = new cliProgress.MultiBar(
  {
    format:         "[{bar}] {percentage}% | {value}/{total} | {course}",
    stopOnComplete: true,
    forceRedraw:    true,
    hideCursor:     true
  },
  cliProgress.Presets.shades_classic
)
const archiveProgressBars = {}
const archiveTotalFiles = {}
const courses = fs
  .readdirSync(coursesPath)
  .filter(course => !course.includes("."))
if (courses.length <= 0) {
  console.error(`No courses found`)
  process.exit(1)
}
console.log("Generating Hugo sites...")
hugoProgress.start(courses.length, 0)
for (const course of courses) {
  archiveTotalFiles[course] = totalWebpackFiles
  // run the hugo build
  const tmpDir = tmp.dirSync({
    prefix: `hugo-course-publisher-courses-${course}`
  }).name
  if (
    shell.exec(
      `hugo -d ${tmpDir} -s site --config="build_zips_config.toml" --contentDir ${path.join(
        "..",
        coursesPath,
        course
      )} --quiet`
    ).code === 0
  ) {
    // create the archive
    const archive = archiver("zip", {
      comment: course
    })
    archive.on("entry", entry => {
      if (!archiveProgressBars[entry.course]) {
        archiveProgressBars[entry.course] = multiBar.create(
          archiveTotalFiles[course],
          0
        )
      }
      archiveProgressBars[entry.course].increment(1, { course: entry.course })
    })
    archive.on("warning", warning => {
      console.log(warning)
    })
    archive.on("error", error => {
      console.error(error)
    })
    // add the webpack files
    webpackFiles.forEach(file => {
      archive.file(path.join(distPath, file), {
        name:   file,
        course: course
      })
    })
    // get the course files and add them to the archive
    const courseFiles = walkSync(tmpDir)
    archiveTotalFiles[course] += courseFiles.length
    for (const file of courseFiles) {
      const filePath = path.join(tmpDir, file)
      archive.file(filePath, {
        name:   file,
        course: course
      })
    }
    if (staticAssetsPath) {
      const courseStaticPath = path.join(staticAssetsPath, course)
      const courseStaticAssets = walkSync(courseStaticPath).filter(
        file =>
          !(
            RegExp("^[0-9a-f]{32}_master.json").test(file) ||
            file === "master.json" ||
            file.includes(".html")
          )
      )
      archiveTotalFiles[course] += courseStaticAssets.length
      for (const staticAsset of courseStaticAssets) {
        archive.file(path.join(courseStaticPath, staticAsset), {
          name:   path.join(staticPrefix, course, staticAsset),
          course: course
        })
      }
    }
    const output = fs.createWriteStream(path.join(zipsPath, `${course}.zip`))
    archive.pipe(output)
    archive.finalize()
    hugoProgress.increment()
  }
}
