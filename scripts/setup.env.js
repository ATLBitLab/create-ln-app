const fs = require('fs');
const path = require('path');
const { dirname } = require('path');
const appDir = dirname(require.main.path);
const envFile = path.join(appDir, '/backend/docker/compose/export.json');
const envData = JSON.parse(fs.readFileSync(envFile, 'utf8'));
const nodeData = envData.network.nodes.lightning;
let nodeEnvStr = `REACT_APP_NUM_NODES=${nodeData.length}\nREACT_APP_BASE_URL=https://127.0.0.1:\n`;

nodeData.forEach((node, i) => {
    const PORT = node.ports.rest;
    const NAME = node.name.toUpperCase();
    const MACAROON = Buffer.from(
        fs.readFileSync(node.paths.adminMacaroon)
    ).toString('hex');

    const NODE_ENV = `\nREACT_APP_N${i}_NAME=${NAME}\nREACT_APP_${NAME}_MACAROON=${MACAROON}\nREACT_APP_${NAME}_PORT=${PORT}\n`;
    nodeEnvStr += NODE_ENV;
});

fs.writeFileSync(path.join(appDir, '/frontend/typescript/.env'), nodeEnvStr);
fs.writeFileSync(path.join(appDir, '/frontend/javascript/.env'), nodeEnvStr);
console.info('create-ln-app: .env setup complete');
