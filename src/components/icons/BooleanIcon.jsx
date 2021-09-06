import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";

export default function BooleanIcon({ truthy, withColors }) {
  return truthy ? (
    <IoMdCheckmarkCircleOutline
      title="true"
      className={classnames({ "text-success": withColors })}
      size="20px"
    />
  ) : (
    <IoMdCloseCircleOutline
      title="false"
      className={classnames({ "text-danger": withColors })}
      size="20px"
    />
  );
}

BooleanIcon.propTypes = {
  truthy: PropTypes.bool.isRequired,
  withColors: PropTypes.bool,
};

BooleanIcon.defaultProps = {
  withColors: false,
};
