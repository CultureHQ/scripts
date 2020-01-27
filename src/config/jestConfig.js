const { fromPkgRoot, hasPkgFile } = require("../utils");

const jestConfig = {
  moduleFileExtensions: ["js", "json", "ts", "tsx", "d.ts"],
  roots: [
    fromPkgRoot("src")
  ],
  setupFilesAfterEnv: [],
  testEnvironment: "jsdom",
  testRegex: "\\.test\\.(j|t)sx?$",
  testURL: "http://localhost"
};

if (hasPkgFile("setupTests.js")) {
  jestConfig.setupFilesAfterEnv.push("./setupTests.js");
}

module.exports = jestConfig;
