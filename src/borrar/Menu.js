import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom'
import logo from '../logo.svg'

const Menu = props => {
  const history = useHistory()
  
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
      {props.isAuth ? `Welcome ${props.name}` : "Welcome user"}
      </Navbar.Brand>

    
    <Nav className="mr-auto">
      {props.isAuth ? (
        <Nav.Link as={NavLink} to="/" >Tareas</Nav.Link>
      ) : (
        <Nav.Link as={NavLink} to="/login" >Login</Nav.Link>
      )}
      <Nav.Link as={NavLink} to="/info" >Info</Nav.Link>
    </Nav>
    {props.isAuth && (<Button onClick={() => {
      localStorage.removeItem("token")
      props.setIsAuth(false)
      history.push("/")
    }}>Logout</Button>)}
  </Navbar>
  )
}

export default Menu
