import React from "react";
import { UncontrolledTooltip } from "reactstrap";
import { Link as RRLink } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";

export default function LinkOpenViewIcon({ id, href, tooltip, ...rest }) {
  return (
    <i>
      <RRLink id={`viewBtn-${id}`} to={href} {...rest}>
        <MdOpenInNew size="24px" />
      </RRLink>
      <UncontrolledTooltip placement="top" target={`viewBtn-${id}`}>
        {tooltip}
      </UncontrolledTooltip>
    </i>
  );
}

