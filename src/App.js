import './App.css';
import React from "react";
import {
  BrowserRouter as Outlet
} from "react-router-dom";
import { Nav, Navbar, NavDropdown, NavLink, Container, Form, FormControl, Button} from 'react-bootstrap'
import Header from './components/Header';

export default function App() {
  return (
    <Header />
  );
}


