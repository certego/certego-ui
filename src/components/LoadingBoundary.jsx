import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Spinner, Col } from "reactstrap";

import ErrorAlert from "./alerts/ErrorAlert";

function LoadingBoundary(props) {
  const { loading, error, size, render, renderError, } = props;

  return (
    <>
      {loading && (
        <Spinner size={size} type="ripple" className="d-block mx-auto my-5" />
      )}
      {error && renderError({ error, size, })}
      <Col
        md={12}
        className={classnames("p-0", { invisible: loading || error, })}
      >
        {render()}
      </Col>
    </>
  );
}

LoadingBoundary.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  render: PropTypes.func.isRequired,
  renderError: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

LoadingBoundary.defaultProps = {
  error: null,
  renderError: ErrorAlert,
  size: "md",
};

export default LoadingBoundary;
