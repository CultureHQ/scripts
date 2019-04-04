const path = require("path");
const { fromPkgRoot, hasPkgDep, hasPkgFile } = require("../utils");

const jestConfig = {
  roots: [
    fromPkgRoot("src")
  ],
  setupFilesAfterEnv: [],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "/node_modules/",
    "__mocks__"
  ],
  testRegex: "\\.test\\.js$",
  testURL: "http://localhost"
};

if (hasPkgDep("react-testing-library")) {
  jestConfig.setupFilesAfterEnv.push(
    path.join(__dirname, "..", "config", "setupReactTests.js")
  );
}

if (hasPkgFile("setupTests.js")) {
  jestConfig.setupFilesAfterEnv.push("./setupTests.js");
}

module.exports = jestConfig;
