import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";

export default function AppHeader() {
  return (
    <Navbar dark expand="xs">
      <NavbarBrand tag={RRNavLink} to="/">
        <span className="text-secondary h4">@certego/certego-ui</span>
      </NavbarBrand>
      <h6 className="fst-italic">example components</h6>
    </Navbar>
  );
}
