import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {LinkContainer} from 'react-router-bootstrap';

export  function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
    <LinkContainer to="/" >
      <Navbar.Brand>Music Band View Application</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/" >
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/band-simple-pager" >
          <Nav.Link>View</Nav.Link>
        </LinkContainer>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}
