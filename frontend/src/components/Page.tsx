import { useState } from "react";
import { useLightning } from "../lightning/LightningStore";
import { Button, Input, Container, Step, Text } from "./Page.styles";

const Page = () => {
  const lightningStore = useLightning();

  const [invoice, setInvoice] = useState('')


  return (
        <Container>
          <Text size={'2'}>Steps</Text>

          <Step>
            <Text>1. Add Bob as a peer</Text>
            <Button onClick={() => lightningStore.addPeer('peer')}>Add peer</Button>
          </Step>

          <Step>
            <Text>2. Open a channel to Bob</Text>
            <Button onClick={() => lightningStore.openChannel('pubkey', 10000)}>Open channel</Button>
          </Step>

          <Step>
            <Text>3. Mine a block 6 times to confirm the channel</Text>
            <Button>Mine Block</Button>
          </Step>

          <Step>
            <Text>4. Mine request an invoice from Bob.</Text>
            <Button>Request Invoice</Button>
            <label>
              <Input name="invoice" disabled type="text" value={invoice || 'lnbc124324112341...'} />
            </label>
          </Step>

          <Step>
            <Text>5. Pay the requested invoice.</Text>
            <Button>Pay Invoice</Button>
            <Input disabled type="text" value={invoice || 'lnbc124324112341...'} />
          </Step>
        </Container>

  )


};
export default Page;