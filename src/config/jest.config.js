const { fromPkgRoot, hasPkgFile } = require("../utils");

const config = {
  roots: [fromPkgRoot("src")]
  testPathIgnorePatterns: [
    "/node_modules/",
    "__mocks__"
  ],
  testRegex: ".test.js",
  testURL: "http://localhost"
};

if (hasPkgFile("setupTests.js")) {
  config.setupFilesAfterEnv = ["./setupTests.js"];
}

module.exports = config;
