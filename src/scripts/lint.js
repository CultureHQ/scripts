const path = require("path");
const spawn = require("cross-spawn");
const yargsParser = require("yargs-parser");

const { hasPkgFile, hasPkgProp, resolveBin } = require("../utils");

const args = process.argv.slice(2);
const parsedArgs = yargsParser(args);

const params = [];

if (!args.includes("--config") && !hasPkgFile(".eslintrc") && !hasPkgFile(".eslintrc.js") && !hasPkgProp("eslintConfig")) {
  params.push("--config", path.join(__dirname, "../config/eslintrc.js"));
}

if (!args.includes("--ignore-path") && !hasPkgFile(".eslintignore") && !hasPkgProp("eslintIgnore")) {
  params.push("--ignore-path", path.join(__dirname, "../config/.eslintignore"));
}

if (!args.includes("--no-cache")) {
  params.push("--cache");
}

if (parsedArgs._.length > 0) {
  params.push(...args.filter(arg => !parsedArgs._.includes(arg) || /\.jsx?$/.test(arg)));
} else {
  params.push(".");
}

const result = spawn.sync(resolveBin("eslint"), params, { stdio: "inherit" });

process.exit(result.status);
