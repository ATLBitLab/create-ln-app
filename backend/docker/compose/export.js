const path = require('path');
const fs = require('fs');
const lndDir = path.join(__dirname, '0/volumes/lnd');
const nodes = fs.readdirSync(lndDir);
const node0 = path.join(lndDir, nodes[0]);
const node1 = path.join(lndDir, nodes[1]);
const node2 = path.join(lndDir, nodes[2]);

const networkInfo = {
    network: {
        id: 1,
        name: 'create-ln-app',
        status: 3,
        path: `${__dirname}/0`,
        nodes: {
            bitcoin: [
                {
                    id: 0,
                    networkId: 1,
                    name: 'backend1',
                    type: 'bitcoin',
                    implementation: 'bitcoind',
                    version: '23.0',
                    peers: [],
                    status: 3,
                    ports: {
                        rpc: 18443,
                        p2p: 19444,
                        zmqBlock: 28334,
                        zmqTx: 29335,
                    },
                    docker: { image: '', command: '' },
                },
            ],
            lightning: [
                {
                    id: 0,
                    networkId: 1,
                    name: 'alice',
                    type: 'lightning',
                    implementation: 'LND',
                    version: '0.15.2-beta',
                    status: 3,
                    backendName: 'backend1',
                    paths: {
                        tlsCert: `${node0}/tls.cert`,
                        adminMacaroon: `${node0}/data/chain/bitcoin/regtest/admin.macaroon`,
                        invoiceMacaroon: `${node0}/data/chain/bitcoin/regtest/invoice.macaroon`,
                        readonlyMacaroon: `${node0}/data/chain/bitcoin/regtest/readonly.macaroon`,
                    },
                    ports: { rest: 8081, grpc: 10001, p2p: 9735 },
                    docker: { image: '', command: '' },
                },
                {
                    id: 1,
                    networkId: 1,
                    name: 'bob',
                    type: 'lightning',
                    implementation: 'LND',
                    version: '0.15.2-beta',
                    status: 3,
                    backendName: 'backend1',
                    paths: {
                        tlsCert: `${node1}/tls.cert`,
                        adminMacaroon: `${node1}/data/chain/bitcoin/regtest/admin.macaroon`,
                        invoiceMacaroon: `${node1}/data/chain/bitcoin/regtest/invoice.macaroon`,
                        readonlyMacaroon: `${node1}/data/chain/bitcoin/regtest/readonly.macaroon`,
                    },
                    ports: { rest: 8082, grpc: 10002, p2p: 9736 },
                    docker: { image: '', command: '' },
                },
                {
                    id: 2,
                    networkId: 1,
                    name: 'carol',
                    type: 'lightning',
                    implementation: 'LND',
                    version: '0.15.2-beta',
                    status: 3,
                    backendName: 'backend1',
                    paths: {
                        tlsCert: `${node2}/tls.cert`,
                        adminMacaroon: `${node2}/data/chain/bitcoin/regtest/admin.macaroon`,
                        invoiceMacaroon: `${node2}/data/chain/bitcoin/regtest/invoice.macaroon`,
                        readonlyMacaroon: `${node2}/data/chain/bitcoin/regtest/readonly.macaroon`,
                    },
                    ports: { rest: 8083, grpc: 10003, p2p: 9737 },
                    docker: { image: '', command: '' },
                },
            ],
        },
    },
    chart: {
        offset: { x: 0, y: 0 },
        nodes: {
            backend1: {
                id: 'backend1',
                type: 'bitcoin',
                position: { x: 200, y: 400 },
                ports: {
                    backend: {
                        id: 'backend',
                        type: 'top',
                        position: { x: 100, y: 0 },
                    },
                    'peer-left': {
                        id: 'peer-left',
                        type: 'left',
                        position: { x: 0, y: 21 },
                    },
                    'peer-right': {
                        id: 'peer-right',
                        type: 'right',
                        position: { x: 200, y: 21 },
                    },
                },
                size: { width: 200, height: 42 },
                properties: {
                    status: 3,
                    icon: './static/media/bitcoin.c9f33461.svg',
                },
            },
            alice: {
                id: 'alice',
                type: 'lightning',
                position: { x: 50, y: 100 },
                ports: {
                    'empty-left': {
                        id: 'empty-left',
                        type: 'left',
                        position: { x: 0, y: 21 },
                    },
                    'empty-right': {
                        id: 'empty-right',
                        type: 'right',
                        position: { x: 200, y: 21 },
                    },
                    backend: {
                        id: 'backend',
                        type: 'bottom',
                        position: { x: 100, y: 42 },
                    },
                },
                size: { width: 200, height: 42 },
                properties: {
                    status: 3,
                    icon: './static/media/lnd.095d2fef.png',
                },
            },
            bob: {
                id: 'bob',
                type: 'lightning',
                position: { x: 300, y: 200 },
                ports: {
                    'empty-left': {
                        id: 'empty-left',
                        type: 'left',
                        position: { x: 0, y: 21 },
                    },
                    'empty-right': {
                        id: 'empty-right',
                        type: 'right',
                        position: { x: 200, y: 21 },
                    },
                    backend: {
                        id: 'backend',
                        type: 'bottom',
                        position: { x: 100, y: 42 },
                    },
                },
                size: { width: 200, height: 42 },
                properties: {
                    status: 3,
                    icon: './static/media/lnd.095d2fef.png',
                },
            },
            carol: {
                id: 'carol',
                type: 'lightning',
                position: { x: 550, y: 100 },
                ports: {
                    'empty-left': {
                        id: 'empty-left',
                        type: 'left',
                        position: { x: 0, y: 21 },
                    },
                    'empty-right': {
                        id: 'empty-right',
                        type: 'right',
                        position: { x: 200, y: 21 },
                    },
                    backend: {
                        id: 'backend',
                        type: 'bottom',
                        position: { x: 100, y: 42 },
                    },
                },
                size: { width: 200, height: 42 },
                properties: {
                    status: 3,
                    icon: './static/media/lnd.095d2fef.png',
                },
            },
        },
        links: {
            'alice-backend1': {
                id: 'alice-backend1',
                from: { nodeId: 'alice', portId: 'backend' },
                to: { nodeId: 'backend1', portId: 'backend' },
                properties: { type: 'backend' },
            },
            'bob-backend1': {
                id: 'bob-backend1',
                from: { nodeId: 'bob', portId: 'backend' },
                to: { nodeId: 'backend1', portId: 'backend' },
                properties: { type: 'backend' },
            },
            'carol-backend1': {
                id: 'carol-backend1',
                from: { nodeId: 'carol', portId: 'backend' },
                to: { nodeId: 'backend1', portId: 'backend' },
                properties: { type: 'backend' },
            },
        },
        selected: { type: 'node', id: 'alice' },
        hovered: {},
        scale: 1,
    },
};

module.exports = { networkInfo };