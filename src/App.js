import React from 'react'
import { Container } from 'react-bootstrap';
import Menu from '../src/borrar/Menu'
import List from './borrar/List'
import './styles/bootstrap.min.css'
function App() {
  return (
    <Container>
      <Menu/>
      <List/>
    </Container>

  );
}
export default App;

