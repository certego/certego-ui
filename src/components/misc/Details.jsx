import React from "react";
import { Collapse } from "reactstrap";

import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

export default function Details({ title = "Toggle expand", children, clickCoversRegion = false, ...rest }) {

  // local state
  const [isOpen, setIsOpen] = React.useState(true);

  // callbacks
  const toggle = React.useCallback(
    (e) => {
      // stop event bubbling
      // if inner div onClick is fired, outer div's onClick won't be fired
      e.cancelBubble = true;
      if (e.stopPropagation) e.stopPropagation();
      setIsOpen((s) => !s);
    },
    [setIsOpen]
  );

  // memo
  const toggleProps = React.useMemo(
    () => ({
      role: "button",
      tabIndex: 0,
      onClick: toggle,
      onKeyPress: toggle,
    }),
    [toggle]
  );

  return (
    <div {...(clickCoversRegion ? toggleProps : {})} {...rest}>
      <div
        className="text-secondary"
        {...(!clickCoversRegion ? toggleProps : {})}
      >
        {isOpen ? (
          <IoMdArrowDropdown size="20px" />
        ) : (
          <IoMdArrowDropright size="20px" />
        )}
        {title}
      </div>
      <Collapse isOpen={isOpen}>{children}</Collapse>
    </div>
  );
}

