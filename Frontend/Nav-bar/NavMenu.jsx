import React from 'react'
import { Link } from "react-router-dom";
import "../scss/style.scss";
import { Container, Navbar, Nav } from 'react-bootstrap';


function NavMenu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Byn-Blocket</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/varukorg">Varukorg</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>


  )
}

export default NavMenu