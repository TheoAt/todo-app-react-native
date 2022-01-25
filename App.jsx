//IMPORT FROM LIBRARIES
import { StatusBar } from 'expo-status-bar';

//IMPORT COMPONENTS
import Home from './src/components/Home'

//IMPORT STYLES
import { Container } from './src/styles/appStyles'

export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style='light'/>
    </Container>
  );
}
