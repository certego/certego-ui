import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { DropdownItem } from "reactstrap";

/**
 * @type {component}
 * @param props
 */
export default function DropdownNavLink(props) {
  const { ...toPassProps } = props;

  return (
    <DropdownItem
      tag={RRNavLink}
      activeClassName="nav-link-active"
      to="#"
      {...toPassProps}
    />
  );
}

DropdownNavLink.propTypes = {
  ...RRNavLink.propTypes,
};
