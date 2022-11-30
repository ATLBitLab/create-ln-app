const fs = require('fs');
const path = require('path');
const { dirname } = require('path');
const appDir = dirname(require.main.path);
const { networkInfo } = require('../backend/docker/compose/export.js')
// const networkInfo = JSON.parse(fs.readFileSync(envFile, 'utf8'));

const BASE_URL = 'https://127.0.0.1';
const NODE_NAMES = [];
const NODES = [];

const nodeData = networkInfo.network.nodes.lightning;
let nodeEnvStr = `REACT_APP_NUM_NODES=${nodeData.length}\nREACT_APP_BASE_URL=${BASE_URL}\n`;

let nodeEnvJson = {
    NUM_NODES: nodeData.length,
    BASE_URL: BASE_URL,
};

nodeData.forEach((node, i) => {
    const PORT = node.ports.rest;
    const NAME = node.name.toUpperCase();
    const MACAROON = Buffer.from(
        fs.readFileSync(node.paths.adminMacaroon)
    ).toString('hex');

    NODE_NAMES.push(NAME);
    NODES.push({
        id: i,
        name: NAME,
        macaroon: MACAROON,
        port: PORT,
        url: `${BASE_URL}:${PORT}`,
    });

    nodeEnvJson.NODES = NODES;
    nodeEnvJson.NODE_NAMES = NODE_NAMES;

    const ENV_STR = `\nREACT_APP_N${i}_NAME=${NAME}\nREACT_APP_${NAME}_MACAROON=${MACAROON}\nREACT_APP_${NAME}_PORT=${PORT}\n`;
    nodeEnvStr += ENV_STR;
});

const nodeEnvJsonStr = `const dev = ${JSON.stringify(
    nodeEnvJson,
    null,
    2
)}\n\nconst prod = {};\n\nconst config = process.env.REACT_APP_ENV === 'production' ? prod : dev;\n\nexport const Env = { ...config,};`;

fs.writeFileSync(path.join(appDir, '/frontend/ts/.env'), nodeEnvStr);
fs.writeFileSync(path.join(appDir, '/frontend/ts/src/.env.js'), nodeEnvJsonStr);

fs.writeFileSync(path.join(appDir, '/frontend/js/.env'), nodeEnvStr);
fs.writeFileSync(path.join(appDir, '/frontend/js/src/.env.js'), nodeEnvJsonStr);

console.info('create-ln-app: .env setup complete');
