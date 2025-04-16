import { Text } from 'react-native';
import { Container } from './styles';
import Header from '../components/Header';
import Body from '../components/Body';

export default function Main() {
  return (
    <Container>
      <Header />  
      <Body />      
    </Container>
  );
}