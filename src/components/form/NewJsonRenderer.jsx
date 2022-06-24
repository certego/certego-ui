import React from "react";
import PropTypes from "prop-types";

import ReactJson from 'react-json-view';

function NewJsonRenderer({ jsonData, ...rest }) {
  return (
      <>
    <ReactJson
        name={null}
        theme="harmonic"
        src={jsonData}
        displayObjectSize={false}
        displayDataTypes={false}
        {...rest}

    />
        </>
  );
}

NewJsonRenderer.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.object,
};

NewJsonRenderer.defaultProps = {
  onChange: null,
  placeholder: null,
};

export default React.memo(NewJsonRenderer);
