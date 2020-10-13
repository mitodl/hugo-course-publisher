const path = require("path")
const fsPromises = require("fs").promises

const { buildZips } = require("./build_course_zips")

describe("build_course_zips", () => {
  const cwd = process.cwd()
  const distPath = path.join(cwd, "dist")
  const zipsError = new Error(
    "zips path must not be within hugo content or static directories"
  )

  it("throws an error if the coursesPath does not exist", async () => {
    let currentCwd
    try {
      currentCwd = process.cwd()
      process.chdir("/tmp")
      await buildZips(distPath).catch(err => {
        expect(err).toEqual(
          new Error(`Courses path "/tmp/site/content/courses" not found`)
        )
      })
    } finally {
      process.chdir(currentCwd)
    }
  })

  it("throws an error if you pass it an empty courses directory", async () => {
    let currentCwd
    try {
      currentCwd = process.cwd()
      process.chdir("/tmp")
      await fsPromises.mkdir("/tmp/site/content/courses", { recursive: true })
      await buildZips(distPath).catch(err => {
        expect(err).toEqual(new Error("No courses found"))
      })
    } finally {
      process.chdir(currentCwd)
    }
  })

  it("throws an error when called with content dir as zip destination", async () => {
    const invalidZipsPath = path.join(cwd, "site", "content")
    await buildZips(distPath, invalidZipsPath).catch(err => {
      expect(err).toEqual(zipsError)
    })
  })

  it("throws an error when called with static dir as zip destination", async () => {
    const invalidZipsPath = path.join(cwd, "site", "static")
    await buildZips(distPath, invalidZipsPath).catch(err => {
      expect(err).toEqual(zipsError)
    })
  })
})
