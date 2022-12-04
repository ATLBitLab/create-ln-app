// import { Env } from '../.env';
import axios from 'axios';

export class LightningStore {
    constructor(node) {
        this.node = node ?? null;
    }

    setNode(node) {
        this.node = node;
        this.node.id = node.id;
        this.node.name = node.name;
        this.node.macaroon = node.macaroon;
        this.node.port = node.port;
        this.node.url = node.url;
    }

    resetNode(node) {
        this.setNode(node);
    }

    getNode() {
        return this.node ?? null;
    }

    async getInfo(node) {
        try {
            const response = await axios.get(`${node.url}/v1/getinfo`, {
                headers: {
                    'Grpc-Metadata-macaroon': node.macaroon,
                },
            });
            const alias = response.data.alias;
            const uris = response.data.uris;
            return { alias, uris };
        } catch (error) {
            console.log('error', error);
        }
    }

    async listPeers(node) {
        try {
            const response = await axios.get(`${node.url}/v1/peers`, {
                headers: {
                    'Grpc-Metadata-macaroon': node.macaroon,
                },
            });
            return response.data.peers;
        } catch (error) {
            console.log('error', error);
        }
    }

    async connect(node) {
        try {
            const response = await axios.post(
                `${node.url}/v1/peers`,
                {
                    addr: '<lnrpcLightningAddress>',
                    perm: '<boolean>',
                    timeout: '<string>',
                },
                {
                    headers: {
                        'Grpc-Metadata-macaroon': node.macaroon,
                    },
                }
            );
            return response.data.peers;
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
