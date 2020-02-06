# @culturehq/scripts

[![Build Status](https://github.com/CultureHQ/scripts/workflows/Main/badge.svg)](https://github.com/CultureHQ/scripts/actions)
[![Package Version](https://img.shields.io/npm/v/@culturehq/scripts.svg)](https://www.npmjs.com/package/@culturehq/scripts)

CultureHQ's CLI toolbox for JavaScript projects.

## Usage

You install this module as a dev dependency in your package, as in:

```
yarn add --dev @culturehq/scripts
```

From there you can invoke any of the scripts listed in [`src/scripts`](src/scripts) by running `chq-scripts [script]`. You can add these to your `package.json` by adding to the `scripts` key, as in:

```json
{
  "scripts": {
    "lint": "chq-scripts lint",
    "test": "chq-scripts test"
  }
}
```

The scripts themselves are listed below:

### `lint`

Runs `eslint` with the `@culturehq/eslint-config` base configuration.

If you want to override the configuration, you can do all of the normal `eslint` config patterns of either creating a `.eslintrc` file, a `.eslintrc.js` file, putting a `eslintConfig` prop in your `package.json`, or passing the `--config` flag on the command line.

To make sure you're extending the config for this project, make sure you add `extends: ["@culturehq"]` to your config. If there are conflicts with your version of `eslint`, it's possible this config will be nested under the `@culturehq/scripts` directory, in which case you would need to add `extends: ["./node_modules/@culturehq/scripts/node_modules/@culturehq/eslint-config"]` to your config.

### `test`

Runs `jest` with a pre-built configuration from [`src/config/jestConfig.js`](src/config/jestConfig.js).

If you need to do something special at the beginning of the tests, `chq-scripts` supports adding a `setupTests.js` file at the root of the repository which will be automatically run before `jest` starts.

## Development

Ensure you have `node` and `yarn` installed on your system. Then run `yarn` in the root of the repository to install the dependencies. Tests are run with `yarn test` and linting is run with `yarn lint`.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/CultureHQ/scripts.

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
