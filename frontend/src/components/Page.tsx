import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useLightning } from '../lightning/LightningStore';
import { Button, Input, Container, Step, Text } from './Page.styles';

const Page = () => {
  const lightningStore = useLightning();
  const [invoice, setInvoice] = useState('');
  const [me, setMe] = useState('');
  const [peer, setPeer] = useState('');

  const handleWhoAmI = async (event: SelectChangeEvent) => {
    setMe(event.target.value);
    await lightningStore.whoAmI(event.target.value);
  };

  const handleAddPeer = async (event: SelectChangeEvent) => {
    setPeer(event.target.value);
    await lightningStore.addPeer('peer')
  }

  return (
    <Container>
      <Text size={'2'}>Steps</Text>
      <Step>
        <Text>Who are you?</Text>
        <Select
          style={{ width: "30%" }}
          labelId="node-1"
          id="node-1"
          value={me}
          label="Age"
          onChange={handleWhoAmI}
        >
          <MenuItem value={"Alice"}>Alice</MenuItem>
          <MenuItem value={"Bob"}>Bob</MenuItem>
          <MenuItem value={"Carol"}>Carol</MenuItem>
        </Select>
        <Text>You are now {me}</Text>
      </Step>

      <Step>
        <Text>Add a peer</Text>
        <Select
          style={{ width: "30%" }}
          labelId="node-1"
          id="node-1"
          value={peer}
          label="Age"
          onChange={handleAddPeer}
        >
          <MenuItem value={"Alice"}>Alice</MenuItem>
          <MenuItem value={"Bob"}>Bob</MenuItem>
          <MenuItem value={"Carol"}>Carol</MenuItem>
        </Select>
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
