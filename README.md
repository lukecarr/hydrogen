# Hydrogen

A super lightweight, frontend-less LMS (Learning Management System).

[![License](https://img.shields.io/github/license/lukecarr/hydrogen?color=4a00e0)](https://github.com/lukecarr/hydrogen/blob/master/LICENSE)
[![Stable Version](https://img.shields.io/github/package-json/v/lukecarr/hydrogen/master?label=Stable)](https://github.com/lukecarr/hydrogen/releases)
![Code Size](https://img.shields.io/github/languages/code-size/lukecarr/hydrogen)
[![Issues Open](https://img.shields.io/github/issues/lukecarr/hydrogen)](https://github.com/lukecarr/hydrogen/issues)
[![OSS Lifecycle](https://img.shields.io/osslifecycle/lukecarr/hydrogen)](https://github.com/lukecarr/hydrogen/blob/master/OSSMETADATA)
[![Buy me a coffee!](https://img.shields.io/badge/buy%20me%20a-coffee-%23FF5E5B)](https://ko-fi.com/lukecarr)

## Key Features

- **Frontend-less LMS.** We provide the nitty-gritty API backend, you provide the user interface!
- **Ridiculously performant.** Designed from the ground up to be fast and lightweight.

## Installation

Simply install Hydrogen globally with NPM's CLI and you're ready to go. Yep, it really is that easy!

```bash
$ npm i -g @hydrogen-lms/core
```

## Usage

Once you've installed Hydrogen, you'll be able to interact with it using the two provided CLIs, `hydrogen` (for launching the server) and `helium` (for performing administrative actions such as database migrations).

```bash
# Launches the Helium shell
$ helium

# Launch the Hydrogen server
$ hydrogen
```

## Contributing

### General Guidelines

By contributing to this project, you agree to all of the general guidelines outlined in the **[CONTRIBUTING.md](CONTRIBUTING.md)** file.

### Code of Conduct

We have a code of conduct outlined in the **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)** file which you are expected to adhere to at all times.

## Credits

Hydrogen is built with the following open source packages:

- **[Fastify](https://fastify.io)**
- **[Slonik](https://github.com/gajus/slonik)**
- **[TypeScript](https://www.typescriptlang.org)**
- **[Vorpal](https://vorpal.js.org)**

Hydrogen also uses the following open sources packages as build tools:

- **[Babel](https://babeljs.io)**
- **[ESLint](https://eslint.org)**
- **[Gulp](https://gulpjs.com)**
- **[Terser](https://terser.org)**

For a comprehensive list, see the **[package.json](package.json)** file's dependencies section.
