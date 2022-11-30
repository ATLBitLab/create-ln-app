import { Env } from '../.env';

const nodes = Env.NODES;

export class LightningStore {
    constructor() {}

    async setNode(id) {
        return {
            id: id,
            macaroon: nodes[id].macaroon,
            name: nodes[id].name,
            port: nodes[id].port,
            url: nodes[id].url,
        };
    }

    async listPeers(id) {
      console.log('node id', id)
      console.log('nodes[id].macaroon', nodes[id].macaroon)
      const mac = '0201036C6E6402F801030A108237E1AFDB0F2B2CE21B1D091EEBB41A1201301A160A0761646472657373120472656164120577726974651A130A04696E666F120472656164120577726974651A170A08696E766F69636573120472656164120577726974651A210A086D616361726F6F6E120867656E6572617465120472656164120577726974651A160A076D657373616765120472656164120577726974651A170A086F6666636861696E120472656164120577726974651A160A076F6E636861696E120472656164120577726974651A140A057065657273120472656164120577726974651A180A067369676E6572120867656E657261746512047265616400000620CEAE66BBB02BD089F224706A7E0B1C61DFAF482706C05466651646C5CF2911C1'
        try {
            const response = await fetch(`https://localhost:8081/v1/getinfo`, {
                headers: {
                    'Grpc-Metadata-macaroon': mac,
                    Accept: '*/*',
                    'Cache-Control': 'no-cache',
                    Host: 'localhost:8081',
                    'Content-Type': 'application/json',
                    Connection: 'keep-alive',
                    'User-Agent':
                        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                },
                referrer: 'https://localhost:3000',
                body: null,
                method: 'GET',
                mode: 'no-cors',
                credentials: 'omit',
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
            }).catch((e) => console.log('e', e));
            console.log('response', response);
            console.log('response.body', response.body);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log('error', error);
        }
    }

    async openChannel(pubkey, amount) {
        console.log('Open Channel');
    }

    async mineBlock(count = 1) {
        console.log(`${count} blocks mined.`);
    }

    async generateInvoice(amount, memo) {
        console.log('invoice: lnbc...');
    }

    async payInvoice(paymentRequest) {
        console.log('invoice paid!');
    }
}

export default LightningStore;
