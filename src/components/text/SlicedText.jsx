import React from "react";
import PropTypes from "prop-types";
import { UncontrolledTooltip } from "reactstrap";

import CopyToClipboardButton from "../buttons/CopyToClipboardButton";

function SlicedText({ value, id, cutoffLength, ...rest }) {
  return (
    <div className="d-flex justify-content-between" {...rest}>
      {value && (
        <>
          <span id={id}>
            {value.length < cutoffLength
              ? value
              : `${value.slice(0, cutoffLength)}...`}
          </span>
          <CopyToClipboardButton id={`copybtn-${id}`} text={value} />
          <UncontrolledTooltip target={id}>{value}</UncontrolledTooltip>
        </>
      )}
    </div>
  );
}

SlicedText.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cutoffLength: PropTypes.number,
};

SlicedText.defaultProps = {
  cutoffLength: 15,
};

export default React.memo(SlicedText, (pp, np) => pp.id === np.id);
