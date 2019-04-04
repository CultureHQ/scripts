const fs = require("fs");
const path = require("path");

const findPkg = () => {
  let dir = path.resolve(fs.realpathSync(process.cwd()));
  const { root } = path.parse(dir);

  while (dir !== root) {
    const file = path.resolve(dir, "package.json");

    if (fs.existsSync(file)) {
      return file;
    }

    dir = path.dirname(dir);
  }

  throw new Error("Could not find valid package.json");
};

const pkgPath = findPkg();
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

module.exports = { pkgPath, pkg };
