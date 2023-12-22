import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="/">My Resume</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="nav-link" to="/">about</NavLink>
          <NavLink className="nav-link" to="/resume">resume</NavLink>
          {/* <NavLink className="nav-link" to="/portfolio">portfolio</NavLink> */}
          <NavLink className="nav-link" to="/contact">contact</NavLink>
          <NavLink className="nav-link" to="/passion">passion</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
