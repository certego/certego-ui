import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "reactstrap";

/**
 * @type {component}
 * @param props
 */
function HoverDropdown(props) {
  const { defaultOpen, ...toPassProps } = props;

  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <Dropdown
      {...toPassProps}
      isOpen={isOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      toggle={() => setIsOpen(!isOpen)}
      a11y
    />
  );
}

HoverDropdown.defaultProps = {
  defaultOpen: false,
};

HoverDropdown.propTypes = {
  ...Dropdown.propTypes,
  defaultOpen: PropTypes.bool,
};

export default HoverDropdown;
