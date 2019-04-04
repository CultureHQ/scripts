jest.mock("../findPkg", () => ({
  pkg: {
    name: "foo",
    peerDependencies: {
      react: "^16",
      "react-dom": "^16"
    },
    dependencies: {
      "react-modal": "^3"
    },
    devDependencies: {
      eslint: "^5"
    }
  },
  pkgPath: "/foo/package.json"
}));

const { fromPkgRoot, hasPkgDep, hasPkgProp } = require("../utils");

test("fromPkgRoot", () => {
  expect(fromPkgRoot("foo")).toEqual("/foo/foo");
});

test("hasPkgDep", () => {
  ["react", "react-dom", "react-modal", "eslint"].forEach(dep => {
    expect(hasPkgDep(dep)).toBe(true);
  });

  expect(hasPkgDep("foo")).toBe(false);
});

test("hasPkgProp", () => {
  expect(hasPkgProp("name")).toBe(true);
  expect(hasPkgProp("version")).toBe(false);
});
