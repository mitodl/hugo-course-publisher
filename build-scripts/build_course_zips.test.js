const path = require("path")
const shell = require("shelljs")
const tmp = require("tmp")

describe("build_course_zips", () => {
  const cwd = process.cwd()
  const scriptPath = path.join(cwd, "build-scripts", "build_course_zips.js")
  const distPath = path.join(cwd, "dist")
  const coursesPath = path.join(cwd, "site", "content", "courses")
  const zipsPath = tmp.dirSync({ prefix: "zips" }).name

  it("throws an error when called without a dist path", () => {
    expect(
      shell.exec(`node ${scriptPath} -c ${coursesPath} -z ${zipsPath}`, {
        silent: true
      }).code
    ).toEqual(1)
  })

  it("throws an error when called without a courses path", () => {
    expect(
      shell.exec(`node ${scriptPath} -d ${distPath} -z ${zipsPath}`, {
        silent: true
      }).code
    ).toEqual(1)
  })
})
