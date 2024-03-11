import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {LinkContainer} from 'react-router-bootstrap';


const myData = {
  info: 'Some data to pass',
  price: 123
}

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

          <LinkContainer to="/posts" >
            <Nav.Link>Posts</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about" >
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
 
          <NavDropdown title="Pages" id="basic-nav-dropdown">
              <LinkContainer to="/page1" >
                <NavDropdown.Item>Page1</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/page1/param1" >
                <NavDropdown.Item>Page1 with one parameter</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/page1/param1/param2" >
                <NavDropdown.Item>Page1 with several parameter</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/page2">
                <NavDropdown.Item>Page2</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/page2" state={myData}>
                <NavDropdown.Item>Page2 passing state</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/page3" >
                <NavDropdown.Item>Page3</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <NavDropdown title="Props and states" id="basic-nav-dropdown">
            <LinkContainer to="/tables" >
              <NavDropdown.Item>Tables with props</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/tables-states" >
              <NavDropdown.Item>Tables with states</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          <NavDropdown title="List and forms" id="basic-nav-dropdown">
            <LinkContainer to="/friends-simple" >
              <NavDropdown.Item>List of friends</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/friends-edit" >
              <NavDropdown.Item>List of friends with edit</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/friends-edit-val" >
              <NavDropdown.Item>Edit friends with validation</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/friends-simple-pager" >
              <NavDropdown.Item>List of friends with pagination</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          <NavDropdown title="WebApi" id="basic-nav-dropdown">
            <LinkContainer to="/albums-webapi" >
              <NavDropdown.Item>Edit albums from a WebApi</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}