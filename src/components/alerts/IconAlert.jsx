import React from "react";
import { Alert } from "reactstrap";
import PropTypes from "prop-types";
import { MdCheckCircle, MdError, MdInfo, MdWarning } from "react-icons/md";

const iconChoices = {
  danger: MdError,
  warning: MdWarning,
  info: MdInfo,
  success: MdCheckCircle,
};

function getIcon(color) {
  return iconChoices[color] ? iconChoices[color] : MdInfo;
}

export default function IconAlert(props) {
  const { color, children, ...rest } = props;

  const Icon = getIcon(color);

  return (
    <Alert color={color} {...rest}>
      <Icon className="mr-2" />
      {children}
    </Alert>
  );
}

IconAlert.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};
