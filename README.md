# Create LN App
Built with ❤️ ☕️ & ₿ in ATL by the team at [Terminus Electric Money Lab](https://terminus.money/).

## 🧐 What?
LN-App: aka LNapp, Lapp, Lightning app, Lightning Network App; in contract to a "dApp."
LN-Apps, or Lightning Network apps, are software applications that leverage the lightning network
for some part of its functionality such as lightning invoices, streaming payments, managing node
infrastructure and/or liquidity, etc. The list goes on! The idea of the LNapp is to reclaim the use
of the common term "dApp" but reframe it around what we think is the future of decentralized applications.

The term "dApp" was popularized by the web 3.0 / defi / crypto community. Much like the term
"web 3.0", the term "dApp" has been overused, subsequently clouding its meaning. We are attempting to replace the
term "dApp" with Lapp or LNapp because we fundamentally believe the Bitcoin Lightning Network will
be the future of online, decentralized payments and become the default currency / payments network for the globe.

## 🧐 Why?
The create-ligthning-app repo is meant to simplify the local dev env setup, so LNapp developers can stop fussing with the dev tooling and start building the future of online commerce!

## 🧐 How?
Setup is easy as 1-2-3!

1. `git clone https://github.com/terminus-btc/create-LNapp.git && cd Lapp-template`
2. `npm run install:all`
3. `npm start`

We recommend using this template as a starting point for your local lightnig development env.
Over time, we plan to evolve this template to include more customizations and features for advanced
developers.

## Important Information
- LND REST Endpoints
  1. alice: `https://127.0.0.1:8081/v1`
  2. bob: `https://127.0.0.1:8082/v1`
  3. carol: `https://127.0.0.1:8083/v1`
- Admin Macaroons
  1. alice: `~/.polar/networks/1/volumes/lnd/alice/data/chain/bitcoin/regtest/admin.macaroom`
  2. bob: `~/.polar/networks/1/volumes/lnd/bob/data/chain/bitcoin/regtest/admin.macaroom`
  3. carol: `~/.polar/networks/1/volumes/lnd/carol/data/chain/bitcoin/regtest/admin.macaroom`
- LND REST API Docs: https://api.lightning.community/#lnd-rest-api-reference
- Bitcoind REST API Endpoint: `http://127.0.0.1:18444/rest`
- Bitcoind REST API Docs: https://github.com/bitcoin/bitcoin/blob/master/doc/REST-interface.md`
