process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";

const { hasPkgFile, hasPkgProp, pkgLog } = require("../utils");

const args = process.argv.slice(2);
const params = [];

if (!args.includes("--config") && !hasPkgFile("jest.config.js") && !hasPkgProp("jest")) {
  params.push("--config", JSON.stringify(require("../config/jestConfig")));
}

pkgLog("jest", params.concat(args));

// eslint-disable-next-line jest/no-jest-import
require("jest").run(params.concat(args));
