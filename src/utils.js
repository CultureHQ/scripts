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

const fromPkgRoot = file => path.join(path.dirname(pkgPath), file);

const { hasOwnProperty } = Object.prototype;
const hasPkgDep = dep => (
  ["dependencies", "devDependencies", "peerDependencies"].some(key => (
    pkg[key] && hasOwnProperty.call(pkg[key], dep)
  ))
);

const hasPkgFile = file => fs.existsSync(path.join(path.dirname(pkgPath), file));
const hasPkgProp = prop => hasOwnProperty.call(pkg, prop);

const resolveBin = exec => {
  const modPkgPath = require.resolve(`${exec}/package.json`);

  // eslint-disable-next-line import/no-dynamic-require
  const { bin } = require(modPkgPath);
  const binExec = typeof bin === "string" ? bin : bin[exec];

  const binPath = path.join(path.dirname(modPkgPath), binExec);
  return binPath.replace(process.cwd(), ".");
};

module.exports = {
  fromPkgRoot,
  hasPkgDep,
  hasPkgFile,
  hasPkgProp,
  resolveBin
};
