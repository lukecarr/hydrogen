# Hydrogen

[![License](https://img.shields.io/github/license/lukecarr/hydrogen?color=4a00e0&style=flat-square)](https://github.com/lukecarr/hydrogen/blob/master/LICENSE)
[![Version](https://img.shields.io/github/package-json/v/lukecarr/hydrogen/master?label=version&style=flat-square)](https://github.com/lukecarr/hydrogen/releases)
![Code Size](https://img.shields.io/github/languages/code-size/lukecarr/hydrogen?style=flat-square)
[![Issues Open](https://img.shields.io/github/issues/lukecarr/hydrogen?style=flat-square)](https://github.com/lukecarr/hydrogen/issues)
[![OSS Lifecycle](https://img.shields.io/osslifecycle/lukecarr/hydrogen?style=flat-square)](https://github.com/lukecarr/hydrogen/blob/master/OSSMETADATA)
[![Buy me a coffee!](https://img.shields.io/badge/buy%20me%20a-coffee-%23FF5E5B?style=flat-square&logo=ko-fi)](https://ko-fi.com/lukecarr)

A super lightweight, frontend-less LMS (Learning Management System).

## Key Features

- **Frontend-less LMS.** We provide the nitty-gritty API backend, you provide the user
  interface!
- **Ridiculously performant.** Designed from the ground up to be fast and lightweight.

## Installation

Simply install Hydrogen globally with NPM's CLI and you're ready to go. Yep, it really is
that easy!

```bash
$ npm i -g @hydrogen-lms/core
```

## Usage

Once you've installed Hydrogen, you'll be able to interact with it using the provided
`helium` CLI.

```bash
# Launches the Hydrogen server
$ helium serve
```

## Contributing

### General Guidelines

By contributing to this project, you agree to all of the general guidelines outlined in
the **[CONTRIBUTING.md](CONTRIBUTING.md)** file.

### Code of Conduct

We have a code of conduct outlined in the **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)**
file which you are expected to adhere to at all times.

## Credits

Hydrogen is built with the following open source packages:

- **[Caporal](https://caporal.io)**
- **[Fastify](https://fastify.io)**
- **[Postgrator](https://github.com/rickbergfalk/postgrator)**
- **[Slonik](https://github.com/gajus/slonik)**
- **[TypeScript](https://www.typescriptlang.org)**

Hydrogen also uses the following open sources packages as build tools:

- **[Babel](https://babeljs.io)**
- **[ESLint](https://eslint.org)**
- **[Gulp](https://gulpjs.com)**
- **[Terser](https://terser.org)**

For a comprehensive list, see the **[package.json](package.json)** file's dependencies
section.
