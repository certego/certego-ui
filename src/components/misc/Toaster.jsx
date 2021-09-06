import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Toast, ToastBody, ToastHeader, Spinner } from "reactstrap";
import { MdError, MdWarning, MdInfo, MdCheckCircle } from "react-icons/md";

function getIcon(color) {
  const iconChoices = {
    danger: MdError,
    warning: MdWarning,
    info: MdInfo,
    success: MdCheckCircle,
    spinner: Spinner,
  };
  return iconChoices[color] ? iconChoices[color] : iconChoices.info;
}

function Toaster({ header, body, color, timeout, showToggle, ...props }) {
  // state
  const [show, setShow] = useState(true);
  const toggle = useCallback(() => setShow((v) => !v), [setShow]);

  const Icon = getIcon(color);

  const toastColor = color === "spinner" ? "info" : color;

  return (
    <Toast {...props} className={`mx-auto bg-${toastColor}`} isOpen={show}>
      <ToastHeader
        className={`bg-${toastColor} text-dark`}
        toggle={showToggle ? toggle : undefined}
      >
        <Icon className="text-large mr-2" />
        {header}
      </ToastHeader>
      {body && <ToastBody>{body}</ToastBody>}
    </Toast>
  );
}

Toaster.propTypes = {
  ...Toast.propTypes,
  id: PropTypes.string.isRequired,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  color: PropTypes.string,
  timeout: PropTypes.number,
  showToggle: PropTypes.bool,
};

Toaster.defaultProps = {
  body: null,
  color: "info",
  timeout: 4000,
  showToggle: false,
};

export default Toaster;
