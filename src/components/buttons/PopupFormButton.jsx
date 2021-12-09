import React from "react";
import PropTypes from "prop-types";
import { Button, Popover, UncontrolledTooltip } from "reactstrap";

import { IoMdClose } from "react-icons/io";

export default function PopupFormButton(props) {
  // props
  const {
    id,
    title,
    titlePlacement,
    popOverPlacement,
    Icon,
    Form,
    onFormSuccess,
    ...rest
  } = props;

  // state
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  // callbacks
  const onFormSubmit = React.useCallback(() => {
    setTimeout(() => setPopoverOpen(false), 400);
    onFormSuccess();
  }, [setPopoverOpen, onFormSuccess]);

  // vars
  const btnId = `${id}-popover-btn`;

  return (
    <>
      <Button id={btnId} type="button" size="sm" color="info" {...rest}>
        {popoverOpen ? <IoMdClose /> : <Icon />}
      </Button>
      {title && (
        <UncontrolledTooltip
          target={btnId}
          placement={titlePlacement}
          delay={{ show: 0, }}
        >
          {title}
        </UncontrolledTooltip>
      )}
      <Popover
        placement={popOverPlacement}
        isOpen={popoverOpen}
        target={btnId}
        toggle={() => setPopoverOpen(!popoverOpen)}
      >
        <Form onFormSubmit={onFormSubmit} />
      </Popover>
    </>
  );
}

PopupFormButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  titlePlacement: PropTypes.string,
  popOverPlacement: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  Form: PropTypes.func.isRequired,
  onFormSuccess: PropTypes.func,
};

PopupFormButton.defaultProps = {
  onFormSuccess: () => null,
  title: null,
  titlePlacement: "right-start",
  popOverPlacement: "right-start",
};
