import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {LinkContainer} from 'react-router-bootstrap';

export default function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/" >
        <Navbar.Brand>React application</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/" >
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about" >
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
              <LinkContainer to="/page1" >
                <NavDropdown.Item>Page1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/page2">
                <NavDropdown.Item>Page2</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/page3" >
                <NavDropdown.Item>Page3</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}