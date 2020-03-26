import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
          <Navbar.Brand>
		      <img
		        src="/header.png"
		        height="30"
		        className="d-inline-block align-top"
		        alt="Default Logo"
		      />
              <a href="/">Ron's Bookstore</a>
          </Navbar.Brand>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/login">Login</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
