const { hasPkgDep } = require("../utils");

module.exports = {
  extends: [
    "@culturehq",
    hasPkgDep("react") && "@culturehq/eslint-config/react",
    hasPkgDep("typescript") && "@culturehq/eslint-config/typescript"
  ].filter(Boolean)
};
