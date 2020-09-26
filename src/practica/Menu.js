import React from 'react'
import { Container,Nav,Navbar} from 'react-bootstrap'
import logo from '../logo.svg'
const Menu = () => {
  return (
    <Container>
        <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>          
             <Nav className="mr-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
            </Nav>
          </Navbar>
      </Container>
  )
}

export default Menu
