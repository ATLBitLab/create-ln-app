import React, { useEffect } from 'react';
import { useState } from 'react';
import { LightningStore } from '../lightning/LightningStore';
import { NUM_NODES, BASE_URL, NODE_NAMES, NODES } from '../.env';

const lightningStore = new LightningStore();

export const Page = () => {
    const defaultNode = lightningStore.getNode();

    const [invoice, setInvoice] = useState();
    const [node, setNode] = useState(defaultNode ?? NODES[0]);
    const [availablePeers, setAvailablePeers] = useState([...NODE_NAMES]);
    const [peers, setPeers] = useState();

    const handleSetNode = (event) => {
        lightningStore.setNode(NODES[event.target.value]);
        const node = lightningStore.getNode();
        availablePeers.splice(node.id, 1);
        console.log(availablePeers);
        console.log(NODE_NAMES);
        setNode(node);
    };

    const handleAddPeer = async (event) => {

    };

    return (
        <div>
            <h5 style={{ textDecoration: 'underline' }}>Steps</h5>
            <div>
                <div>1. Select a node.</div>
                <select
                    id="nodeSelect"
                    onChange={handleSetNode}
                    defaultValue={''}
                >
                    <option key={''} value={''}>
                        {''}
                    </option>
                    {NODE_NAMES.map((n, i) => {
                        return (
                            <option key={`node-${n}-${i}`} value={i}>
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
                        <p style={{ width: '1000px', wordWrap: 'break-word' }}>
                            Macaroon:{' '}
                            {node.macaroon ? node.macaroon.toUpperCase() : ''}
                        </p>
                        <p>URL: {`${BASE_URL}:${node.port}`}</p>
                    </div>
                ) : (
                    ''
                )}
                <div>
                    <p>2. List peers</p>
                    <button
                        onClick={async () => {
                            const peers = await lightningStore.listPeers(node);
                            console.log(peers);
                            peers
                                ? setPeers(peers)
                                : setPeers(
                                      `${node.name} does not have peers! Use step 3 to connect to peers!`
                                  );
                        }}
                    >
                        List Peers
                    </button>
                    <p>{peers}</p>
                </div>
                <div>
                    <p>3. Connect to peers</p>
                    <button
                        onClick={async () => {
                            const connection = await lightningStore.connect(
                                node
                            );
                            console.log(connection);
                        }}
                    >
                        Connect
                    </button>
                    <br />
                    <select id="connectSelect" onChange={handleAddPeer} defaultValue={node.name}>
                        {NODE_NAMES.map((n, i) => {
                            return (
                                <option
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
                    <div>3. Mine a block 6 times to confirm the channel</div>
                    <button>Mine Block</button>
                </div>

                <div>
                    <div>4. Mine request an invoice from Bob.</div>
                    <button>Request Invoice</button>
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
                    <div>5. Pay the requested invoice.</div>
                    <button>Pay Invoice</button>
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
