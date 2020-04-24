import React, { useState } from 'react';

import NavbarLogo from './../Assets/navbaerLogo.svg';
import NavbarAvatar from './../Assets/navbarAvatar.svg';

import { Navbar, Nav, NavbarToggler, NavbarBrand, Collapse, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';

import { NavLink, useHistory } from 'react-router-dom';

const CNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  let history = useHistory();

  // Logout
  const logout = () => {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Navbar color="white" className="border-bottom" light expand="md">
      <Container>
        <NavbarBrand href="/">
          <img src={NavbarLogo} className="img-fluid" />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="m-auto" navbar>

            <NavItem>
              <NavLink style={{ textDecoration: "none" }} activeClassName="activeClass" className="text-dark" to="/dashboard">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink style={{ textDecoration: "none" }} activeClassName="activeClass" className="text-dark ml-md-3" to="/profile">Profile</NavLink>
            </NavItem>

          </Nav>
        </Collapse>

        <UncontrolledDropdown >
          <DropdownToggle tag="div" caret>
            <img src={NavbarAvatar} className="img-fluid" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={logout}>Logout</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Profile</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

      </Container>
    </Navbar>

  )
}

export default CNavbar
