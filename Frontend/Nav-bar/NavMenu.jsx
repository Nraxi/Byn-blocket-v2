import React from 'react'
import { Link } from "react-router-dom";
import "../scss/style.scss";
import { Container, Navbar, Nav } from 'react-bootstrap';


function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>


  )
}

export default NavMenu