import React from "react";
import { UncontrolledTooltip } from "reactstrap";
import { nanoid } from "nanoid";
import CopyToClipboardButton from "../buttons/CopyToClipboardButton";

function SlicedText({ value, id = undefined, cutoffLength = 15, ...rest }) {

  // vars
  const btnId = id || `copybtn-${nanoid(4)}`;

  return (
    <div className="d-flex justify-content-between" {...rest}>
      {value && (
        <>
          <span id={id}>
            {value.length < cutoffLength
              ? value
              : `${value.slice(0, cutoffLength)}...`}
          </span>
          <CopyToClipboardButton id={btnId} text={value} />
          <UncontrolledTooltip target={btnId}>{value}</UncontrolledTooltip>
        </>
      )}
    </div>
  );
}

export default React.memo(SlicedText, (pp, np) => pp.id === np.id);
