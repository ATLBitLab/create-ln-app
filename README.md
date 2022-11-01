# Terminus Lapp Template
Built with ❤️ ☕️ & ₿ by the team at [Terminus Electric Money Lab](https://terminus.money/)

# Purpose
The Lapp (Lightning app) Template is meant to simplify the local dev env setup, so lightning app
developers can stop fussing with the dev tooling and start building the future of online commerce!

# Steps: Easy as 1-2-3
1. `git clone https://github.com/terminus-btc/Lapp-template.git && cd Lapp-template`
2. `npm install && npm run install:frontend`
3. `npm start`

# Usage
We recommend using this template as a starting point for your local lightnig development env.
Over time, we plan to evolve this template to include more customizations and features for advanced
developers.

# Important Information
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