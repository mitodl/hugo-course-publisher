import { iterateTree } from "./helpers"

describe("helper functions", () => {
  it("iterates over a directory tree and yields files from it", async () => {
    const items = []
    for await (const item of iterateTree(__dirname)) {
      items.push(item)
    }
    expect(items.filter(({ file }) => file === "helpers.js")).toEqual([
      {
        file:    "helpers.js",
        relPath: ".",
        root:    __dirname
      }
    ])
    // items will include everything in the src/js tree, so just make sure there's something there
    expect(items.length).toBeGreaterThan(5)
  })
})
