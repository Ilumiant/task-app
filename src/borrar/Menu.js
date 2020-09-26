import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../logo.svg'

const Menu = () => {
  return (
  <Navbar bg="dark" variant="dark">

    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        </Navbar.Brand>

    
    <Nav className="mr-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default Menu
