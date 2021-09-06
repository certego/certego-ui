import React from "react";
import { MdInfoOutline } from "react-icons/md";

import { UncontrolledTooltip } from "reactstrap";

export default function TableHintIcon(props) {
  return (
    <div {...props}>
      <MdInfoOutline id="table-hint-icon" />
      <UncontrolledTooltip
        target="table-hint-icon"
        trigger="hover"
        placement="right-start"
        flip
      >
        Hint: Hold <kbd>shift</kbd> to filter and order multiple columns
        together.
      </UncontrolledTooltip>
    </div>
  );
}
