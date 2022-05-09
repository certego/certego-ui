import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { DropdownItem } from "reactstrap";
import classNames from "classnames";

/**
 * @type {component}
 * @param props
 */
export default function DropdownNavLink(props) {
  const { className, ...toPassProps } = props;

  return (
    <RRNavLink to="#"
      {...toPassProps}>
      {({ isActive, }) => (
        <DropdownItem
          className={classNames(
            {"nav-link-active": isActive,},
            className
          )}
        />
      )}
    </RRNavLink>

  );
}

DropdownNavLink.propTypes = {
  ...RRNavLink.propTypes,
};
