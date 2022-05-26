import React from "react";
import PropTypes from "prop-types";
import { NavLink as RRNavLink } from "react-router-dom";
import { DropdownItem } from "reactstrap";

/**
 * @type {component}
 * @param props
 */
export default function DropdownNavLink(props) {
  const { children, ...toPassProps } = props;

  return (
    <DropdownItem
      tag={RRNavLink}
      to="#"
      {...toPassProps}
    >
      {children}
    </DropdownItem>

  );
}

DropdownNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  ...RRNavLink.propTypes,
};
