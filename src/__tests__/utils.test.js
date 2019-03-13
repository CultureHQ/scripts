jest.mock("read-pkg-up", () => ({
  sync: jest.fn(() => ({
    pkg: { name: "foo" },
    path: "/foo/package.json"
  })),
}));

let readPkgUpSyncMock;

beforeEach(() => {
  jest.resetModules();
  readPkgUpSyncMock = require("read-pkg-up").sync;
});

const requireUtils = ({ pkg = { name: "foo" }, path = "/foo/package.json" } = {}) => {
  readPkgUpSyncMock.mockImplementationOnce(() => ({ pkg, path }));
  return require("../utils");
};

test("fromPkgRoot", () => {
  const { fromPkgRoot } = requireUtils();

  expect(fromPkgRoot("foo")).toEqual("/foo/foo");
});

test("hasPkgDep", () => {
  const { hasPkgDep } = requireUtils({
    pkg: {
      name: "foo",
      peerDependencies: {
        "react": "^16",
        "react-dom": "^16"
      },
      "dependencies": {
        "react-modal": "^3"
      },
      "devDependencies": {
        "eslint": "^5"
      }
    }
  });

  ["react", "react-dom", "react-modal", "eslint"].forEach(dep => {
    expect(hasPkgDep(dep)).toBe(true);
  });

  expect(hasPkgDep("foo")).toBe(false);
});

test("hasPkgProp", () => {
  const { hasPkgProp } = requireUtils();

  expect(hasPkgProp("name")).toBe(true);
  expect(hasPkgProp("dependencies")).toBe(false);
});
