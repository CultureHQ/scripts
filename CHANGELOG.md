# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed-

- Bumped the `@culturehq/eslint-config` dep to `3.1.0`.
- Bumped the `eslint` dep to `6.2.0`.

## [3.0.1] - 2019-08-12

### Removed

- The functionality of automatically adding `@testing-library/react/cleanup-after-each` to `setupFilesAfterEnv` for `jest` because it is deprecated with the latest version of react.

## [3.0.0] - 2019-08-12

### Changed

- Bumped the `@culturehq/eslint-config` dep to `3.0.0`.

## [2.3.0] - 2019-08-09

### Changed

- Bumped the `@culturehq/eslint-config` dep to `2.2.0`.

## [2.2.0] - 2019-06-26

### Changed

- Bumped the `@culturehq/eslint-config` dep to `2.1.0`.

## [2.1.0] - 2019-06-25

### Changed

- Set the `--resolve-plugins-relative-to` option for `eslint` so that the plugins can get properly resolved when linting.

## [2.0.0] - 2019-06-24

### Changed

- Bumped the `@culturehq/eslint-config` dependency.

## [1.0.0] - 2019-05-31

### Added

- Support the `@testing-library/react` automatic cleanup.

### Removed

- Stop supporting the `react-testing-library` automatic cleanup.

## [0.2.1] - 2019-05-30

### Changed

- Again bump the `@culturehq/eslint-config` dependency.

## [0.2.0] - 2019-05-28

### Changed

- Bumped `@culturehq/eslint-config` dependency.

## [0.1.3] - 2019-04-04

### Added

- The `babel-jest` dependency so packages using this toolkit won't need to install it.

### Changed

- `eslint` now ignores the entire `docs` directory.

## [0.1.2] - 2019-04-04

### Changed

- Bump dependencies, including newer `@culturehq/eslint-config`.

## [0.1.1] - 2019-04-04

### Changed

- Just assume `jsdom` for `jest` environment.

## [0.1.0] - 2019-04-04

### Added

- Initial release! 🎉

[unreleased]: https://github.com/CultureHQ/scripts/compare/v3.0.1...HEAD
[3.0.1]: https://github.com/CultureHQ/scripts/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/CultureHQ/scripts/compare/v2.3.0...v3.0.0
[2.3.0]: https://github.com/CultureHQ/scripts/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/CultureHQ/scripts/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/CultureHQ/scripts/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/CultureHQ/scripts/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/CultureHQ/scripts/compare/v0.2.1...v1.0.0
[0.2.1]: https://github.com/CultureHQ/scripts/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/CultureHQ/scripts/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/CultureHQ/scripts/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/CultureHQ/scripts/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/CultureHQ/scripts/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/CultureHQ/scripts/compare/54cad2...v0.1.0
