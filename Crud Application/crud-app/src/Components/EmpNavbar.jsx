import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const EmpNavbar = () => {
  return (
    <div>
        <Navbar bg="#ff66ff" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Skyline-Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Bakery</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Employee Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Food Products
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default EmpNavbar