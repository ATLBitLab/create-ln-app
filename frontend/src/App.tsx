import './App.css';
import { Container, Title, Text } from './App.styles';
import Page from './components/Page';

function App() {

  return (
    <Container>
        <Title> Create LN App </Title>
        <Text size={'2'}> Get Started with creating a full-stack App on the Lightning Network. </Text>

        <Page />
    </Container>
  );
}

export default App;
