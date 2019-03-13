const path = require("path");
const { fromPkgRoot, hasPkgDep, hasPkgFile } = require("../utils");

const config = {
  roots: [
    fromPkgRoot("src")
  ],
  setupFilesAfterEnv: [],
  testEnvironment: hasPkgDep("react") ? "jsdom" : "node",
  testPathIgnorePatterns: [
    "/node_modules/",
    "__mocks__"
  ],
  testRegex: ".test.js",
  testURL: "http://localhost"
};

if (hasPkgDep("react-testing-library")) {
  config.setupFilesAfterEnv.push(path.join(__dirname, "..", "config", "setupReactTests.js"));
}

if (hasPkgFile("setupTests.js")) {
  config.setupFilesAfterEnv.push("./setupTests.js");
}

module.exports = config;
