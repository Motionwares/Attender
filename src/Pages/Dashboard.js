import React, { useState } from 'react';
import { Container, Navbar, Nav, NavbarToggler, NavbarBrand, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import NavbarLogo from './../Assets/navbaerLogo.svg';
import NavbarAvatar from './../Assets/navbarAvatar.svg';


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="white" className="border-bottom" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={NavbarLogo} className="img-fluid" />
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>

            <Nav className="m-auto" navbar>
              {/* Home */}
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>

              {/* Profile */}
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Profile</NavLink>
              </NavItem>

            </Nav>
          </Collapse>

          <UncontrolledDropdown >
            <DropdownToggle tag="div" caret>
              <img src={NavbarAvatar} className="img-fluid" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

        </Container>
      </Navbar>
    </>
  )
}

export default Dashboard
