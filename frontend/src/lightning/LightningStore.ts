import { createContext, useContext } from "react";

export class LightningStore {
  restEndpoint: any;
  adminMacaroon: any;
  me: any;

  constructor() {
    console.log("constructed")
  }

  async initialize(restEndpoint: string, adminMacaroon: string) {
    this.restEndpoint = restEndpoint;
    this.adminMacaroon = adminMacaroon;
  };

  async whoAmI(N: string) {
    console.log("whoAmI", N);
    this.me = N;
    if (N === "1") {
      this.me = process.env.REACT_APP_NODE_1_NAME;
      this.restEndpoint = process.env.REACT_APP_NODE_1_URL;
      this.adminMacaroon = process.env.REACT_APP_NODE_1_ADMIN_MACAROON;
    } else if (N === "2"){
      this.me = process.env.REACT_APP_NODE_2_NAME;
      this.restEndpoint = process.env.REACT_APP_NODE_2_URL;
      this.adminMacaroon = process.env.REACT_APP_NODE_2_ADMIN_MACAROON;
    } else {
      this.me = process.env.REACT_APP_NODE_3_NAME;
      this.restEndpoint = process.env.REACT_APP_NODE_3_URL;
      this.adminMacaroon = process.env.REACT_APP_NODE_3_ADMIN_MACAROON;
    }
    console.log(this.me)
    console.log(this.restEndpoint)
    console.log(this.adminMacaroon)
  }

  async listPeers() {
    const request = await fetch(this.restEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Grpc-Metadata-macaroon": this.adminMacaroon,
        Accept: "application/json"
      }
    })
    const data = await request.json();
    console.log(data)
  }

  async openChannel(pubkey: string, amount: number) {
    console.log("Open Channel");
  }

  async mineBlock(count: number = 1) {
    console.log(`${count} blocks mined.`);
  }

  async generateInvoice(amount: number, memo: string) {
    console.log('invoice: lnbc...');
  }

  async payInvoice(paymentRequest: string) {
    console.log('invoice paid!');
  }

}

export const LightningStoreContext = createContext<LightningStore>(new LightningStore());
export const useLightning = () => useContext(LightningStoreContext);