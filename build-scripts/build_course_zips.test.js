const path = require("path")
const rimraf = require("rimraf")
const tmp = require("tmp")

const { buildZips } = require("./build_course_zips")

describe("build_course_zips", () => {
  const cwd = process.cwd()
  const distPath = path.join(cwd, "dist")
  const coursesPath = path.join(cwd, "site", "content", "courses")
  const zipsError = new Error(
    "zips path must not be within hugo content or static directories"
  )

  it("throws an error if the coursesPath does not exist", async () => {
    const invalidCoursesPath = tmp.dirSync({
      prefix: "courses"
    }).name
    rimraf.sync(invalidCoursesPath)
    await buildZips(distPath, invalidCoursesPath).catch(err => {
      expect(err).toEqual(
        new Error(`Courses path "${invalidCoursesPath}" not found`)
      )
    })
  })

  it("throws an error if you pass it an empty courses directory", async () => {
    const invalidCoursesPath = tmp.dirSync({
      prefix: "courses"
    }).name
    await buildZips(distPath, invalidCoursesPath).catch(err => {
      expect(err).toEqual(new Error("No courses found"))
    })
  })

  it("throws an error when called with content dir as zip destination", async () => {
    const invalidZipsPath = path.join(cwd, "site", "content")
    await buildZips(distPath, coursesPath, invalidZipsPath).catch(err => {
      expect(err).toEqual(zipsError)
    })
  })

  it("throws an error when called with static dir as zip destination", async () => {
    const invalidZipsPath = path.join(cwd, "site", "static")
    await buildZips(distPath, coursesPath, invalidZipsPath).catch(err => {
      expect(err).toEqual(zipsError)
    })
  })
})
