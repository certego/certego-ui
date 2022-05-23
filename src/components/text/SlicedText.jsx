import React from "react";
import PropTypes from "prop-types";
import { UncontrolledTooltip } from "reactstrap";
import { nanoid } from "nanoid";
import CopyToClipboardButton from "../buttons/CopyToClipboardButton";

function SlicedText({ value, id, cutoffLength, ...rest }) {

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

SlicedText.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  cutoffLength: PropTypes.number,
};

SlicedText.defaultProps = {
  id: undefined,
  cutoffLength: 15,
};

export default React.memo(SlicedText, (pp, np) => pp.id === np.id);
