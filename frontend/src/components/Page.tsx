import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { LightningStore, useLightning } from '../lightning/LightningStore';
import { Button, Input, Container, Step, Text } from './Page.styles';
import { Env } from "../Env"

const Page = () => {
  const lightningStore = useLightning();
  const [invoice, setInvoice] = useState('');
  const [me, setMe] = useState({id: "", name: "", macaroon: "", url: ""});
  const [name, setName] = useState('');
  const [peer, setPeer] = useState('');


  // const [endpoint, setEndpoint] = useState<LightningStore>(REST_ENDPOINT);
  // const [macaroon, setMacaroon] = useState('')

  const handleWhoAmI = async (event: SelectChangeEvent) => {
    const id: any = event.target.value;
    let Me: any;
    switch (id) {
      case "1":
        Me = {
          id: id,
          name: Env.NODE_1_NAME,
          macaroon: Env.NODE_1_ADMIN_MACAROON,
          url: Env.NODE_1_URL,
        }
        break;
      case "2":
        Me = {
          id: "id",
          name: Env.NODE_2_NAME,
          macaroon: Env.NODE_2_ADMIN_MACAROON,
          url: Env.NODE_2_URL,
        }
        break;
      case "3":
        Me = {
          id: "id",
          name: Env.NODE_3_NAME,
          macaroon: Env.NODE_3_ADMIN_MACAROON,
          url: Env.NODE_3_URL,
        }
        break;
      default:
        Me = {
          id: id,
          name: Env.NODE_1_NAME,
          macaroon: Env.NODE_1_ADMIN_MACAROON,
          url: Env.NODE_1_URL,
        }
        break;
    }
    setMe(Me)
    setName(Me.name)

    console.log("Me", Me)
    await lightningStore.whoAmI(event.target.value);
  };

  const handleAddPeer = async (event: SelectChangeEvent) => {
    setPeer(event.target.value);
    await lightningStore.listPeers()
  }

  return (
    <Container>
      <Text size={'2'}>Steps</Text>
      <Step>
        <Text>Who are you?</Text>
        <Select
          style={{ width: "30%" }}
          labelId="nodeId"
          id="nodeId"
          label="Age"
          onChange={handleWhoAmI}
        >
          <MenuItem value={"1"}>Alice</MenuItem>
          <MenuItem value={"2"}>Bob</MenuItem>
          <MenuItem value={"3"}>Carol</MenuItem>
        </Select>
        <Text>You are now {name.toUpperCase()}</Text>
        <Text>Connection Information:</Text>
        <Text>ID: {me.id}</Text>
        <Text>Name: {me.name}</Text>
        <Text>Macaroon: {me.macaroon.slice(0, 80)}</Text>
        <Text>URL: {me.url}</Text>
      </Step>

      <Step>
        <Text>List peers</Text>
        <Button
          onClick={() => lightningStore.listPeers()}
        >
          List
        </Button>
      </Step>

      <Step>
        <Text>2. Open a channel to Bob</Text>
        <Button
          onClick={() => lightningStore.openChannel('pubkey', 10000)}
        >
          Open channel
        </Button>
      </Step>

      <Step>
        <Text>3. Mine a block 6 times to confirm the channel</Text>
        <Button>Mine Block</Button>
      </Step>

      <Step>
        <Text>4. Mine request an invoice from Bob.</Text>
        <Button>Request Invoice</Button>
        <label>
          <Input
            name="invoice"
            disabled
            type="text"
            value={invoice || 'lnbc124324112341...'}
          />
        </label>
      </Step>

      <Step>
        <Text>5. Pay the requested invoice.</Text>
        <Button>Pay Invoice</Button>
        <Input
          disabled
          type="text"
          value={invoice || 'lnbc124324112341...'}
        />
      </Step>
    </Container>
  );
};
export default Page;
