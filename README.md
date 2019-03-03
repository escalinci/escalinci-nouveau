## Dependencies

Firstly you must install Node.js. The recommended method is to use `nvm`. Follow the installation instructions [here](https://github.com/creationix/nvm), then run:

```bash
nvm install --lts
nvm use --lts
```

This will install the latest "Long Term Support" version of Node.js. When a new version is released, simply re-running these commands should be enough to install the newer version.

After this, you must install `yarn`, using the relevant package manager for your system, following the installation instructions [here](https://yarnpkg.com). Be sure, however, not to install a version of node that would conflict with the one `nvm` now points to. On a debian-like system, this is achieved with the following:

```bash
sudo apt-get install --no-install-recommends yarn
```

Then to install the dependencies specified in the package.json, you just need to run `yarn install`.

## Development

To start a hot-reloading server, run the following:

```sh
yarn start
```

Then open up a browser tab at <http://localhost:8000>

### Tooling

Use whichever editor you like, but [VSCode](https://code.visualstudio.com/) is recommended. You should set up your editor to use the following tools - [eslint](https://eslint.org/), [stylelint](https://stylelint.io/) and [prettier](https://prettier.io/).

## Production Builds

To test a production build, run the following:

```sh
yarn build
yarn serve
```

Then open up a browser tab at <http://localhost:9000>
