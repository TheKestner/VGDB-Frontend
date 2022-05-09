import {React, useState, useEffect} from "react";
import { Nav, Navbar, NavDropdown, NavLink, Container, Form, FormControl, Button} from 'react-bootstrap'
import { Navigate, useParams } from "react-router-dom";
import { getSearch } from "../utils/data";
import { useNavigate } from "react-router-dom";


export default function Header() {

  // const [items, setItems] = useState([]);
  const [games, setGames] = useState([]);
  // useEffect(() => {
  //     getSearch()
  //     .then((data) => {
  //     setItems(data)
  //     })
  
  // },[]);

  let navigate = useNavigate();

  const searchChangeHandler = (e) => {
    setGames(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`search/${games}`);
    setGames('');

  };

  return (
    <div>
    <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">VGDB</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Form onSubmit={submitHandler} className="d-flex">
        <FormControl
          value={games}
          onChange={searchChangeHandler}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
        />
        <Button type='submit' variant="outline-info">Search</Button>
      </Form>
          <NavDropdown title="Games" id="basic-nav-dropdown">
            <NavDropdown.Item href="/discover">Discover</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Community" id="basic-nav-dropdown">
            <NavDropdown.Item href="#discord">Discord</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="login">Login</NavDropdown.Item>
            <NavDropdown.Item href="register">Register</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  );
}



// let { id } = useParams();

// function handleSubmit(e) {
//   e.preventDefault();
//   e.id = id
//   console.log('You clicked search.');
// }