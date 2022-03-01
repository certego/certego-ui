# @certego/certego-ui

[![NPM](https://img.shields.io/npm/v/@certego/certego-ui.svg)](https://www.npmjs.com/package/@certego/certego-ui)
[![Node.js Package](https://github.com/certego/certego-ui/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/certego/certego-ui/actions/workflows/npm-publish.yml)

Certego components library. Built on React.js + reactstrap + more.

## Projects using certego-ui

- [Dragonfly](https://dragonfly.certego.net/): Dragonfly is a malware sandbox based on binary emulation, a service by [Certego S.R.L](https://certego.net/). 
- [IntelOwl](https://github.com/intelowlproject/IntelOwl)

## Install

```bash
npm install --save @certego/certego-ui
```

## Documentation

### Use local build of `certego-ui` with hot-reload (for faster development)

You can configure your local development environment in a way that any change in the `certego-ui` directory will trigger a new build which, in turn, will trigger a new build of your project. This will save you a lot of development time and headache.

- Clone the [certego/certego-ui](https://github.com/certego/certego-ui) repository if you haven't already.

```bash
$ git clone git@github.com:certego/certego-ui.git /home/user/certego-ui
```

- Install dependencies and start local dev server,

```bash
/home/user/certego-ui$ npm install
/home/user/certego-ui$ npm start
```

- In your other project that uses `certego-ui`, open the `package.json` file and modify under `"dependencies"` to `"@certego/certego-ui": "/home/user/certego-ui"`.
- Now re-install dependencies and start local dev server,

```bash
/home/user/certego-ui$ npm install
/home/user/certego-ui$ npm start
```

### Start example project

- Open a terminal and start local dev server for `certego-ui`,

```bash
/home/user/certego-ui$ npm start
```

- Open another terminal and start local dev server for the `certego-ui/example` app,

```bash
/home/user/certego-ui/example$ npm install
/home/user/certego-ui/example$ npm start
```

- The example application will be served on http://localhost:3000/.


### Create new release (github & npm)

- Modify `version` attribute inside `package.json` file and run `npm install` in a terminal.
- Modify `CERTEGO_UI_VERSION` variable in `example/src/layouts/AppFooter.jsx` file.
- Write a new entry in the `CHANGELOG.md` file describing the changes.
- Finally, you should create a new release on the GitHub repistory by going to [this](https://github.com/certego/certego-ui/releases/new) link.

New release on GitHub will automatically publish new release on npmjs.com and, re-build and deploy the example application as well.

## Changelog

[CHANGELOG.md](https://github.com/certego/certego-ui/blob/main/CHANGELOG.md)

## License

MIT © [certego](https://github.com/certego)
