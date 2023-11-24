import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "reactstrap";

export default function FallBackLoading({ text, ...rest }) {
  return (
    <div className="vertical-center" {...rest}>
      <div className="container text-center">
        <Spinner type="ripple" className="spinner-border-lg" />
        <h4 className="mt-4">{text}</h4>
      </div>
    </div>
  );
}

FallBackLoading.propTypes = {
  text: PropTypes.string,
};

FallBackLoading.defaultProps = {
  text: "Loading...",
};
