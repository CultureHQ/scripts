process.env.BABEL_ENV = "test";
process.env.NODE_ENV = "test";

const { hasPkgFile, hasPkgProp } = require("../utils");

const args = process.argv.slice(2);
const params = [];

if (!args.includes("--config") && !hasPkgFile("jest.config.js") && !hasPkgProp("jest")) {
  params.push("--config", JSON.stringify(require("../config/jestConfig")));
}

require("jest").run(params.concat(args));
