# [Create LN App](https://github.com/ATLBitLab/create-ln-app/)
Built with ❤️ ☕️ & ₿ in ATL by the [ATL BitLab](https://atlbitlab.com/) team. This is an open-source
effort. Feel free to steal like an artist to make your life eaier. If you find issues, pls submit them
to the repo. If you're feelin' froggy 🐸 and want a feature now, feel free to fork, build and submit a PR.
## What? 🧐
Lapp: aka Lightning App; in contrast to a dApp. The term dApp was popularized by the web 3.0 / defi / crypto community. Much like the term web 3.0, the term dApp has become overused, subsequently losing its meaning. We fundamentally believe that, in time, the Lapp will supercede the dApp as the go-to framework
to build applications that use a blockchain for native currency. Lapps are software applications that run on top of the Bitcoin Lightning Network: (L)igtning(app).

## Why? 🤷🏼‍♂️
The idea of this repo is to enable developers to build Lapps faster and easier, so as a community, we can "move fast and break things" on L2 increasing the rate of innovation in and adoption of Bitcoin. `create-ln-app` is meant to simplify the local dev env setup, so Lapp developers can stop fussing with the dev tooling and start building the future!

## How? 🛠
Setup is easy as 0-1-2!

0. [Click here to fork](https://github.com/ATLBitLab/create-ln-app/fork) this repo. Then, run the following command replacing `<USERNAME>` with your github username.

```
git clone git@github.com:<USERNAME>/create-ln-app.git my_Lapp && cd my_Lapp
```

Or, you can simply clone this repo if you prefer.

```
git clone https://github.com/ATLBitLab/create-ln-app.git && cd create-ln-app
```

1. `npm run install:all`
2. `npm start`

We recommend using this template as a starting point for your local lightning development env.
Over time, we plan to evolve this template to include more customizations and features for advanced
developers.

## Prerequisites
Below is a list of required and optional software packages for running this software.
#### Required
The software below is required to be able to properly run this code. Click the links for install instructions.
- [node & npm](https://nodejs.org/en/download/package-manager/)
- [npx](https://www.npmjs.com/package/npx) (requires node & npm)
- [docker](https://docs.docker.com/engine/install/)
- [docker-compose](https://docs.docker.com/compose/install/)

Or if you're on a mac, you can install `node` & `npm`, `docker` and `docker-compose` with homebrew, and then install `npx` using `npm`.
```
brew install node docker docker-compose
npm install -g npx
```

If you install `docker desktop`, make sure you open it and get the docker engine running.

#### Optional
Homebrew is optional for mac, but it is very handy to have when you need to install packages.
- [brew](https://brew.sh/) (mac only)
If you want homebrew, run the following command.
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

 `n` and `nvm` are also optionL, but again, they are handy node version management packages.
- [n](https://www.npmjs.com/package/n)
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

## Useful Information
Once the `npm start` command is executed, you'll see a new `.env` file placed at `frontend/js/.env` and `frontend/ts/.env` as well as `frontend/js/src/.env.js` and `frontend/ts/src/.env.js`. These env files with have all the env variables that you need to run the example app. These also provide you options with for how you want to access env vars (i.e. `process.env` vs `import { ... } from ../.env`). In the event that fails, find the relevant info below.

#### LND
- LND REST Endpoints: you will need these urls to make REST calls to your LND nodes on polar.
  1. alice: `https://127.0.0.1:8081/v1`
  2. bob: `https://127.0.0.1:8082/v1`
  3. carol: `https://127.0.0.1:8083/v1`
- Admin Macaroons: you will need these in hex format to authenticate REST calls to your LND nodes on polar.
  1. alice: `<path-to-repo-dir>/backend/docker/compose/create-ln-app-0/volumes/lnd/alice/data/chain/bitcoin/regtest/admin.macaroon`
  2. bob: `<path-to-repo-dir>/backend/docker/compose/create-ln-app-0/volumes/lnd/bob/data/chain/bitcoin/regtest/admin.macaroon`
  3. carol: `<path-to-repo-dir>/backend/docker/compose/create-ln-app-0/volumes/lnd/carol/data/chain/bitcoin/regtest/admin.macaroon`
- To get the `admin.macaroon` in hex format, use the following command:
```sh
cd backend/docker/compose/create-ln-app-0/volumes/lnd/alice/data/chain/bitcoin/regtest
xxd -ps -u -c 1000 admin.macaroon
```
Mac users can copy to clipboard with the following command:
```sh
cd backend/docker/compose/create-ln-app-0/volumes/lnd/alice/data/chain/bitcoin/regtest
xxd -ps -u -c 1000 admin.macaroon | pbcopy
```
- Alternatively, you can run the following command inside either `frontend/js` or `frontend/ts` to output each `admin.macaroon` in hex format:
```sh
npm run env:hex-macaroons
```
- LND REST API Docs: [click here](https://api.lightning.community/#lnd-rest-api-reference)

#### bitcoind
- Bitcoind REST API Endpoint: http://127.0.0.1:18444/rest
- Bitcoind REST API Docs: [click here](https://github.com/bitcoin/bitcoin/blob/master/doc/REST-interface.md)
