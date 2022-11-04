import { createContext, useContext } from "react";

export class LightningStore {
  restEndpoint: string | undefined;
  adminMacaroon: string | undefined;

  constructor() { 
    console.log('constructed')
  }

  async initialize(restEndpoint: string, adminMacaroon: string) {
    this.restEndpoint = restEndpoint;
    this.adminMacaroon = adminMacaroon;
  };

  async addPeer(connectionString: string) {
    console.log("Added peer with connection string");
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