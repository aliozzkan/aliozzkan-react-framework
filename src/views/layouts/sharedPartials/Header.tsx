import React, { useState, ReactElement } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as BtNavLink,
} from "reactstrap";
import { useStore } from "react-redux";
import { IStore } from "store";
import { NavLink, Link } from "react-router-dom";

function UnAuthMenu() {
  return (
    <Nav navbar>
      <NavItem>
        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </NavItem>
    </Nav>
  );
}

function AuthMenu() {
  return (
    <Nav navbar>
      <NavItem>
        <NavLink to="/account" className="nav-link">
          Account
        </NavLink>
      </NavItem>
      <NavItem>
        <Link to="/logout" className="nav-link">
          Logout
        </Link>
      </NavItem>
    </Nav>
  );
}

function Header(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const reduxStore: IStore = useStore().getState();

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">AliOzzkan-React-Framework</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/" exact={true}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <BtNavLink href="https://github.com/aliozzkan" target="_blank">
              GitHub
            </BtNavLink>
          </NavItem>
        </Nav>
        {reduxStore.userStore.isLogged ? <AuthMenu /> : <UnAuthMenu />}
      </Collapse>
    </Navbar>
  );
}

export default Header;
