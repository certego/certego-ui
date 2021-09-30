import React from "react";
import { Spinner } from "reactstrap";
import PropTypes from "prop-types";

import ErrorAlert from "../alerts/ErrorAlert";

function Loader(props) {
  const { loading, error, render, renderError, size, } = props;
  return (
    <>
      {loading && (
        <Spinner size={size} type="ripple" className="d-block mx-auto my-5" />
      )}
      {error && renderError({ error, size, })}
      {!(loading || error) && render()}
    </>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  render: PropTypes.func.isRequired,
  renderError: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

Loader.defaultProps = {
  error: null,
  renderError: ErrorAlert,
  size: "md",
};

export default Loader;
