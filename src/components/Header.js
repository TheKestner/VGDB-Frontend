import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar, NavDropdown, NavLink, Container, Form, FormControl, Button} from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">VGDB</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
          <NavDropdown title="Games" id="basic-nav-dropdown">
            <NavDropdown.Item href="#home">Discover</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Community" id="basic-nav-dropdown">
            <NavDropdown.Item href="#discord">Discord</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="login">Login</NavDropdown.Item>
            <NavDropdown.Item href="#register">Register</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}