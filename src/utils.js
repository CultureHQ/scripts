const fs = require("fs");
const path = require("path");
const readPkgUp = require("read-pkg-up");
const which = require("which");

const { pkg, path: pkgPath } = readPkgUp.sync({ cwd: fs.realpathSync(process.cwd()) });

const fromPkgRoot = file => path.join(path.dirname(pkgPath), file);

const hasPkgFile = file => fs.existsSync(path.join(path.dirname(pkgPath), file));
const hasPkgProp = prop => Object.prototype.hasOwnProperty.call(pkg, prop);

const resolveBin = exec => {
  let execPath;

  try {
    execPath = fs.realpathSync(which.sync(exec));
  } catch (error) {
    // ignore
  }

  try {
    const modPkgPath = require.resolve(`${exec}/package.json`);

    /* eslint-disable-next-line global-require, import/no-dynamic-require */
    const { bin } = require(modPkgPath);
    const binPath = path.join(path.dirname(modPkgPath), typeof bin === "string" ? bin : bin[exec]);

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
  hasPkgFile,
  hasPkgProp,
  resolveBin
};
