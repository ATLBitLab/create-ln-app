const fs = require('fs');
const path = require('path');
const { dirname } = require('path');
const appDir = dirname(require.main.path);
const envFile = path.join(appDir, '/backend/docker/compose/export.json');
const envData = JSON.parse(fs.readFileSync(envFile, 'utf8'));
const nodeData = envData.network.nodes.lightning;
let nodeEnvString = '';

nodeData.forEach((node, i) => {
    i += 1;
    const PORT = node.ports.rest;
    const NAME = node.name;
    const MACAROON = Buffer.from(
        fs.readFileSync(node.paths.adminMacaroon)
    ).toString('hex');
    const URL = `https://127.0.0.1:${PORT}/v1`;
    const NODE_ENV = `NODE_${i}_NAME=${NAME}\nNODE_${i}_ADMIN_MACAROON=${MACAROON}\nNODE_${i}_PORT=${PORT}\nNODE_${i}_URL=${URL}\n`;
    nodeEnvString += NODE_ENV;
});

fs.writeFileSync(path.join(appDir, '/frontend/.env'), nodeEnvString);
console.info('create-ln-app: .env setup complete');
