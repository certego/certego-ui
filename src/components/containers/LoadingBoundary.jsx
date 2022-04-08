import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Spinner, Col } from "reactstrap";

import ErrorAlert from "../alerts/ErrorAlert";

function LoadingBoundary(props) {
  const { loading, error, size, render, renderError, } = props;
  // this is required due to a bug in the axios-hooks library which
  // shows this string even if the request was successful
  var show_error = false;
  if (error && error.response){
      show_error = true;
  }

  console.log(error);
  console.log(show_error);

  return (
    <>
      {loading && (
        <Spinner size={size} type="ripple" className="d-block mx-auto my-5" />
      )}
      {show_error && renderError({ error, size, })}
      {!loading && !show_error && (
          <Col
            md={12}
            className={classnames("p-0")}
          >
            {render()}
          </Col>
      )}
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
