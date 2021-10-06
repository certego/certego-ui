import React from "react";
import PropTypes from "prop-types";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

function CustomJsonInput(props) {
  const { onChange, placeholder, ...rest } = props;
  return (
    <JSONInput
      style={{
        container: {
          display: "block",
          border: "1px solid #2f515e",
        },
        contentBox: {
          borderLeft: "1px solid #2f515e",
          marginLeft: "-10px",
        },
      }}
      height="200px"
      theme="dark_vscode_tribute"
      locale={locale}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
}

CustomJsonInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.any.isRequired,
};

export default React.memo(CustomJsonInput);
