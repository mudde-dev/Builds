import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function Header()
{
    return (
    <div className="container">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>React-bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Posts</Nav.Link>
                <Nav.Link>About</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item>Page1</NavDropdown.Item>
                    <NavDropdown.Item>Page2</NavDropdown.Item>
                <NavDropdown.Divider />
                    <NavDropdown.Item>Page3</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
    );
}

