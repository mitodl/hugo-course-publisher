const path = require("path")
const { buildZips } = require("./build_course_zips")

describe("build_course_zips", () => {
  const cwd = process.cwd()
  const distPath = path.join(cwd, "dist")
  const coursesPath = path.join(cwd, "site", "content", "courses")
  const zipsError = new Error("zips path must not be within hugo content or static directories")

  it("throws an error when called with content dir as zip destination", () => {
    const invalidZipsPath = path.join(cwd, "site", "content")
    expect(buildZips(distPath, coursesPath, invalidZipsPath)).toThrow(zipsError)
  })

  it("throws an error when called with static dir as zip destination", () => {
    const invalidZipsPath = path.join(cwd, "site", "static")
    expect(buildZips(distPath, coursesPath, invalidZipsPath)).toThrow(zipsError)
  })
})
