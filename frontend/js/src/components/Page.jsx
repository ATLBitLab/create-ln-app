import React, { useEffect } from 'react';
import { useState } from 'react';
import { LightningStore } from '../lightning/LightningStore';
import { Env } from '../.env';
import { Typography } from '@mui/material';

const nodes = Env.NODES;
const baseUrl = Env.BASE_URL;

export const Page = () => {
    const [invoice, setInvoice] = useState('');
    const [user, setUser] = useState({});
    const [peer, setPeer] = useState('');

    useEffect(() => {
        setUser(nodes[0]);
        console.log('user', user);
    }, []);

    const lightningStore = new LightningStore();

    const handleSetNode = async (event) => {
        const user = await lightningStore.setNode(event.target.value);
        setUser(user);
        console.log('user', user);
    };

    const handleAddPeer = async (event) => {
        setPeer(event.target.value);
        await lightningStore.listPeers();
    };

    return (
        <div>
            <h5 style={{ textDecoration: 'underline' }}>Steps</h5>
            <div>
                <div>1. Select a node.</div>
                <select
                    id="nodeId"
                    label="Age"
                    onChange={handleSetNode}
                    defaultValue={nodes[0]}
                >
                    {nodes
                        ? nodes.map((n) => {
                              return (
                                  <option key={n.id} value={n.id}>
                                      {n.name}
                                  </option>
                              );
                          })
                        : ''}
                </select>
                <div>
                    <p>Name: {user.name}</p>
                    <p>Connection Information</p>
                    <p>ID: {user.id}</p>
                    <p style={{ width: '1000px', wordWrap: 'break-word' }}>
                        Macaroon:{' '}
                        {user.macaroon ? user.macaroon.toUpperCase() : ''}
                    </p>
                    <p>URL: {`${baseUrl}:${user.port}`}</p>
                </div>

                <div>
                    <p>2. List peers</p>
                    <button onClick={() => lightningStore.listPeers(user.id)}>
                        List peers
                    </button>
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
