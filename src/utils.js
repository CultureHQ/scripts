const fs = require("fs");
const path = require("path");
const readPkgUp = require("read-pkg-up");
const which = require("which");

const { hasOwnProperty } = Object.prototype;
const { pkg, path: pkgPath } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd())
});

const fromPkgRoot = file => path.join(path.dirname(pkgPath), file);

const hasPkgDep = dep => (
  ["dependencies", "devDependencies", "peerDependencies"].some(key => (
    pkg[key] && hasOwnProperty.call(pkg[key], dep)
  ))
);

const hasPkgFile = file => fs.existsSync(path.join(path.dirname(pkgPath), file));
const hasPkgProp = prop => hasOwnProperty.call(pkg, prop);

const resolveBin = exec => {
  let execPath;

  try {
    execPath = fs.realpathSync(which.sync(exec));
  } catch (error) {
    // ignore
  }

  try {
    const modPkgPath = require.resolve(`${exec}/package.json`);

    // eslint-disable-next-line import/no-dynamic-require
    const { bin } = require(modPkgPath);
    const binExec = typeof bin === "string" ? bin : bin[exec];
    const binPath = path.join(path.dirname(modPkgPath), binExec);

    if (binPath === execPath) {
      return exec;
    }
    return binPath.replace(process.cwd(), ".");
  } catch (error) {
    if (execPath) {
      return exec;
    }
    throw error;
  }
};

module.exports = {
  fromPkgRoot,
  hasPkgDep,
  hasPkgFile,
  hasPkgProp,
  resolveBin
};
