# Create LN App
Built with ❤️ ☕️ & ₿ in ATL by the [Terminus Labs](https://terminus.money/) team. Feel free to submit issues and/or PR for new feature requests

## What? 🧐
Lapp: aka Lightning App; in contrast to a dApp. The term dApp was popularized by the web 3.0 / defi / crypto community.
Much like the term web 3.0, the term dApp has been overused, subsequently clouding its meaning.
Lapps are software applications that run on top of the Bitcoin Lightning Network.
The idea of the Lapp is to allow us to move fast and break things on L2, so we can increase the rate 
of innovation in Bitcoin. We also want to swap out the idea of a dApp for a Lapp because, as a Bitcoin-focused
organization, we think Bitcoin's Lightning Network will scale Bitcoin to become the future of online payments and money.

## Why? 🤷🏼‍♂️
The create-ln-app repo is meant to simplify the local dev env setup, so Lapp developers can stop fussing with the dev tooling and start building the future of online commerce!

## 🧐 How?
Setup is easy as 0-1-2!

0. [Click here to fork](https://github.com/terminus-btc/create-ln-app/fork) this repo. Then, run the following command replacing `YOURUSERNAME` with your github username.

```
git clone git@github.com:<YOURUSERNAME>/create-ln-app.git my_Lapp && cd my_Lapp
```

Or, you can simply clone this repo if you prefer.

```
git clone https://github.com/terminus-btc/create-ln-app.git && cd create-ln-app
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
- [node/npm](https://nodejs.org/en/download/package-manager/)
- [npx](https://www.npmjs.com/package/npx) (requires node & npm)
- [docker](https://docs.docker.com/engine/install/)
- [docker-compose](https://docs.docker.com/compose/install/)

Or if you're on a mac, you can install `node`, `docker` and `docker-compose` with homebrew, and then
install `npx` using `npm`.
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

 `n` and `nvm` are also options, but again, they are handy node version management packages.
I prefer `n` over `nvm` because it seems to run faster.
- [n](https://www.npmjs.com/package/n)
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

## Useful Information
- LND REST Endpoints: you will need these urls to make REST calls to your LND nodes on polar.
  1. alice: `https://127.0.0.1:8081/v1`
  2. bob: `https://127.0.0.1:8082/v1`
  3. carol: `https://127.0.0.1:8083/v1`
- Admin Macaroons: you will need these in hex format to authenticate REST calls to your LND nodes on polar.
  1. alice: `~/.polar/networks/1/volumes/lnd/alice/data/chain/bitcoin/regtest/admin.macaroon`
  2. bob: `~/.polar/networks/1/volumes/lnd/bob/data/chain/bitcoin/regtest/admin.macaroon`
  3. carol: `~/.polar/networks/1/volumes/lnd/carol/data/chain/bitcoin/regtest/admin.macaroon`

- LND REST API Docs: https://api.lightning.community/#lnd-rest-api-reference
- Bitcoind REST API Endpoint: `http://127.0.0.1:18444/rest`
- Bitcoind REST API Docs: https://github.com/bitcoin/bitcoin/blob/master/doc/REST-interface.md`
