import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand href="/">Srivatsav Kesapragada</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">About</NavLink>
            <NavLink className="nav-link" to="/resume">Resume</NavLink>
            {/* <NavLink className="nav-link" to="/portfolio">portfolio</NavLink> */}
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            {/* <NavLink className="nav-link" to="/passion">Passion</NavLink> */}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
