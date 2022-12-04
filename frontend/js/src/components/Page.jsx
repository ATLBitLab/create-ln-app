import React, { useEffect } from 'react';
import { useState } from 'react';
import { LightningStore } from '../lightning/LightningStore';
import { NUM_NODES, BASE_URL, NODE_NAMES, NODES } from '../.ewnv';

const lightningStore = new LightningStore();

export const Page = () => {
    const defaultNode = lightningStore.getNode();
    const nodeNames = [...NODE_NAMES];

    const [invoice, setInvoice] = useState();
    const [node, setNode] = useState(defaultNode ?? NODES[0]);
    const [availablePeers, setAvailablePeers] = useState(nodeNames);
    const [peers, setPeers] = useState([]);
    const [info, setInfo] = useState({ alias: '', uri: '' });

    // const toggleSelected = (item) => {
    //     return availablePeers.includes(item)
    //         ? availablePeers.filter((i) => i !== item)
    //         : [...availablePeers, item];
    // };

    const handleSetNode = (event) => {
        lightningStore.setNode(NODES[event.target.value]);
        setNode(lightningStore.getNode());
        // console.log(`${node.name} selected`);
        // console.log(`toggleSelected: ${toggleSelected(node.name)}`)
        // console.log(`Peers available ${availablePeers}`);
    };

    const handleConnect = async (event) => {
        lightningStore.connect();
    };

    const handleGetInfo = async (event) => {
        const getInfo = await lightningStore.getInfo(NODES[event.target.value]);
        setInfo({ ...getInfo });
    };

    return (
        <div>
            <h5 style={{ textDecoration: 'underline' }}>Steps</h5>
            <div>
                <div>1. Select a node</div>
                <select
                    id="nodeSelect"
                    onChange={handleSetNode}
                    defaultValue={''}
                    style={{ width: '10em', height: '2.5em' }}
                >
                    <option style={{ fontSize: '32px' }} key={''} value={''}>
                        {''}
                    </option>
                    {NODE_NAMES.map((n, i) => {
                        return (
                            <option
                                style={{ fontSize: '32px' }}
                                key={`node-${n}-${i}`}
                                value={i}
                            >
                                {n}
                            </option>
                        );
                    })}
                </select>
                {node ? (
                    <div>
                        <p>Name: {node.name}</p>
                        <p>Connection Information</p>
                        <p>ID: {node.id}</p>
                        <p
                            style={{
                                width: '10.1%',
                                wordWrap: 'break-word',
                                margin: '0 auto',
                            }}
                        >
                            Macaroon:{' '}
                            {node.macaroon ? node.macaroon.toUpperCase() : ''}
                        </p>
                        <p>URL: {`${BASE_URL}:${node.port}`}</p>
                    </div>
                ) : (
                    ''
                )}
                <div>
                    <p>2. Get info</p>
                    <select
                        id="nodeInfoSelect"
                        onChange={() => handleGetInfo()}
                        defaultValue={''}
                        style={{ width: '10em', height: '2.5em' }}
                    >
                        <option
                            style={{ fontSize: '32px' }}
                            key={''}
                            value={''}
                        >
                            {''}
                        </option>
                        {NODE_NAMES.map((n, i) => {
                            return (
                                <option
                                    style={{ fontSize: '32px' }}
                                    key={`node-getInfo-${n}-${i}`}
                                    value={i}
                                >
                                    {n}
                                </option>
                            );
                        })}
                    </select>
                    <div style={{ width: '10.1%', margin: '0 auto' }}>
                        {info ? console.log('info', info) : ''}
                        {Object.values(info).length > 0
                            ? Object.values(info).map((k, i) => {
                                  console.log(k);
                                  return (
                                      <div>
                                          <p key={`node-alias--${i}`}>{k}</p>
                                          <p key={`node-uri-${i}`}>{k}</p>
                                      </div>
                                  );
                              })
                            : ''}
                    </div>
                </div>
                <div>
                    <p>3. List peers</p>
                    <button
                        onClick={async () => {
                            const peers = await lightningStore.listPeers(node);
                            console.log(peers);
                            peers.length > 0
                                ? setPeers(peers)
                                : setPeers(
                                      `${node.name} does not have peers! Use step 3 to connect to peers!`
                                  );
                        }}
                        style={{ width: '10em', height: '2.5em' }}
                    >
                        List Peers
                    </button>
                    <p style={{ width: '50%', margin: '0 auto' }}>
                        {peers !== '' ? peers : ''}
                    </p>
                </div>
                <div>
                    <p>4. Connect to peers</p>
                    <button
                        onClick={async () => {
                            const connection = await lightningStore.connect(
                                node
                            );
                            console.log(connection);
                        }}
                        style={{ width: '10em', height: '2.5em' }}
                    >
                        Connect
                    </button>
                    <br />
                    <select
                        id="connectSelect"
                        onChange={() => handleConnect()}
                        defaultValue={node.name}
                        style={{ width: '10em', height: '2.5em' }}
                    >
                        {availablePeers.map((n, i) => {
                            return (
                                <option
                                    style={{ fontSize: '32px' }}
                                    key={`node-connect-${n}-${i}`}
                                    value={n}
                                >
                                    {n}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <br />
                <div>
                    <div>5. Mine a block 6 times to confirm the channel</div>
                    <button style={{ width: '10em', height: '2.5em' }}>
                        Mine Block
                    </button>
                </div>

                <div>
                    <div>6. Mine request an invoice from Bob.</div>
                    <button style={{ width: '10em', height: '2.5em' }}>
                        Request Invoice
                    </button>
                    <label>
                        <input
                            name="invoice"
                            disabled
                            type="div"
                            value={invoice || 'lnbc124324112341...'}
                        />
                    </label>
                </div>

                <div>
                    <div>7. Pay the requested invoice.</div>
                    <button style={{ width: '10em', height: '2.5em' }}>
                        Pay Invoice
                    </button>
                    <input
                        disabled
                        type="div"
                        value={invoice || 'lnbc124324112341...'}
                    />
                </div>
            </div>
        </div>
    );
};
