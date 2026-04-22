import React from "react";
import { Dropdown } from "reactstrap";

/**
 * @type {component}
 * @param props
 */
function HoverDropdown({ defaultOpen = false, ...toPassProps }) {

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

export default HoverDropdown;
