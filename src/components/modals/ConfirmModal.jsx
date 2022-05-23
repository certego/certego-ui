import React, { Fragment } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

function ConfirmModal({
  onClose,
  message,
  title,
  confirmText,
  cancelText,
  confirmColor,
  cancelColor,
  className,
  buttonsComponent,
  size,
  bodyComponent,
  modalProps,
}) {
  let buttonsContent = (
    <Fragment>
      {cancelText && (
        <Button color={cancelColor} onClick={() => onClose(false)}>
          {cancelText}
        </Button>
      )}{" "}
      <Button color={confirmColor} onClick={() => onClose(true)}>
        {confirmText}
      </Button>
    </Fragment>
  );

  if (buttonsComponent) {
    const CustomComponent = buttonsComponent;
    buttonsContent = <CustomComponent onClose={onClose} />;
  }

  const BodyComponent = bodyComponent;

  return (
    <Modal
      size={size}
      isOpen
      toggle={() => onClose(false)}
      className={`reactstrap-confirm ${className}`}
      {...modalProps}
    >
      {title && (
        <ModalHeader toggle={() => onClose(false)}>{title || null}</ModalHeader>
      )}
      <ModalBody>{bodyComponent ? <BodyComponent /> : message}</ModalBody>
      <ModalFooter>{buttonsContent}</ModalFooter>
    </Modal>
  );
}

ConfirmModal.defaultProps = {
  message: "Are you sure?",
  title: "Warning!",
  confirmText: "Ok",
  cancelText: "Cancel",
  confirmColor: "primary",
  cancelColor: "",
  className: "",
  buttonsComponent: null,
  size: null,
  bodyComponent: null,
  modalProps: {},
};

ConfirmModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.node,
  title: PropTypes.node,
  confirmText: PropTypes.node,
  cancelText: PropTypes.node,
  confirmColor: PropTypes.string,
  cancelColor: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  buttonsComponent: PropTypes.func,
  bodyComponent: PropTypes.func,
  modalProps: PropTypes.object,
};

export const confirm = (props) => new Promise((resolve) => {
    let el = document.createElement("div");
    const handleResolve = (result) => {
      unmountComponentAtNode(el);
      el = null;
      resolve(result);
    };
      render(<ConfirmModal {...props} onClose={handleResolve} />, el);
  });

export default ConfirmModal;

