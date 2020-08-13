module.exports = {
  clearMocks: true,

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  "setupFilesAfterEnv": ["<rootDir>src/js/test_setup.js"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    "pdfjs"
  ]
};
