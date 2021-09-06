import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink as RSNavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const NavLink = ({ children, className, ...props }) => (
  <RSNavLink
    tag={RRNavLink}
    activeClassName="nav-link-active"
    className={classnames("text-lg-center", className)}
    {...props}
  >
    {children}
  </RSNavLink>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

NavLink.defaultProps = {
  className: null,
};

export default NavLink;
