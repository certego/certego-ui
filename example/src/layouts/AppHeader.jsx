import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Container, Navbar, NavbarBrand } from "reactstrap";

export default function AppHeader() {
  return (
    <Navbar dark expand="xs">
      <Container fluid className="px-1 px-lg-5">
        <NavbarBrand tag={RRNavLink} to="/">
          <span className="text-secondary h4">@certego/certego-ui</span>
        </NavbarBrand>
        <h6 className="fst-italic">example components</h6>
      </Container>
    </Navbar>
  );
}
