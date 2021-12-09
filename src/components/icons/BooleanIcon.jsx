import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { MdCheck, MdCheckCircleOutline } from "react-icons/md";
import { IoMdCloseCircleOutline, IoMdClose } from "react-icons/io";

export default function BooleanIcon({ truthy, withColors, outline, ...rest }) {
  const Check = outline ? MdCheckCircleOutline : MdCheck;
  const Close = outline ? IoMdCloseCircleOutline : IoMdClose;

  return truthy ? (
    <Check
      title="true"
      className={classnames({ "text-success": withColors, })}
      size="20px"
      {...rest}
    />
  ) : (
    <Close
      title="false"
      className={classnames({ "text-danger": withColors, })}
      size="20px"
      {...rest}
    />
  );
}

BooleanIcon.propTypes = {
  truthy: PropTypes.bool.isRequired,
  withColors: PropTypes.bool,
  outline: PropTypes.bool,
};

BooleanIcon.defaultProps = {
  withColors: false,
  outline: true,
};
