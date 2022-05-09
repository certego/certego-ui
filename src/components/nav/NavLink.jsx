import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink as RSNavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

// constants
const type2ClassnameMap = {
  default: "",
  primary: "link-primary",
  primaryUl: "link-ul-primary",
  muted: "link-muted",
  mutedUl: "link-ul-muted",
};

// component
export default function NavLink({ type, children, className, ...props }) {
  return (
    <RRNavLink to="#"
      {...props}>
      {({ isActive, }) => (
        <RSNavLink
          tag="span"
          className={classnames(
            "text-lg-center",
            type2ClassnameMap[type],
            {"nav-link-active": isActive,},
            className
          )}
        >
          {children}
        </RSNavLink>
      )}
    </RRNavLink>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    "default",
    "primary",
    "primaryUl",
    "muted",
    "mutedUl",
  ]),
};

NavLink.defaultProps = {
  className: null,
  type: "default",
};
