const env: any = process.env;
const BASE_URL: string = env.REACT_APP_BASE_URL;
const NUM_NODES: Array<Number> = [env.REACT_APP_NUM_NODES];

const Env = {}

const nodes = [...Array(NUM_NODES).keys()]

nodes.forEach(id => {
  const NODE_NAME = `REACT_APP_${"N" + id}_NAME`
  const MACAROON = `REACT_APP_${env[NODE_NAME]}_MACAROON`
  const PORT = env[`REACT_APP_${env[NODE_NAME]}_PORT`]
  const URL = `${BASE_URL}:${PORT}`

  Env[NODE_NAME] = {
    id: id,
    name: env[NODE_NAME],
    macaroon: env[MACAROON],
    url: URL
  }
});

export { Env };