import './App.css';
import React from "react";
import { Nav, Navbar, NavDropdown, NavLink, Container, Form, FormControl, Button} from 'react-bootstrap'
import Header from './components/Header';
import Slider from './components/Slider';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  );
}


