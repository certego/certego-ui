import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { Container, Navbar, NavbarBrand, Row } from "reactstrap";

export default function AppHeader() {
  return (
    <Navbar dark expand="xs">
      <Container fluid className="px-1 px-lg-5">
        <Row className="d-flex-start-center ">
          <NavbarBrand tag={RRNavLink} to="/">
            <h4 className="text-secondary">@certego/certego-ui</h4>
          </NavbarBrand>
          <h6 className="font-italic">example components</h6>
        </Row>
      </Container>
    </Navbar>
  );
}
