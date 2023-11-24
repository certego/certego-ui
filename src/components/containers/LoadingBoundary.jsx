import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "reactstrap";

import ErrorAlert from "../alerts/ErrorAlert";

function LoadingBoundary(props) {
  const { loading, error, size, render, renderError, } = props;
  // this is required due to a bug in the axios-hooks library which
  // shows this string even if the request was successful
  let showError = false;
  if (error && error.response) {
      showError = true;
  }

  return (
    <>
      {loading && (
        <Spinner type="ripple" className={`d-block mx-auto my-5 spinner-border-${size}`} />
      )}
      {showError && renderError({ error, size, })}
      {!loading && !showError && render()}
    </>
  );
}

LoadingBoundary.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool,
  render: PropTypes.func.isRequired,
  renderError: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

LoadingBoundary.defaultProps = {
  error: null,
  loading: false,
  renderError: ErrorAlert,
  size: "md",
};

export default LoadingBoundary;
