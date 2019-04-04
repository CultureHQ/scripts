const fs = require("fs");
const path = require("path");

const { pkgPath, pkg } = require("./findPkg");

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
