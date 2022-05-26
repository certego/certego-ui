import React from "react";
import PropTypes from "prop-types";
import { Button, Popover, UncontrolledTooltip, PopoverBody } from "reactstrap";
import { nanoid } from "nanoid";
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
  const btnId = id || `popover-btn-${nanoid(4)}`;

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
        <PopoverBody className="bg-dark">
          <Form onFormSubmit={onFormSubmit} />
        </PopoverBody>
      </Popover>
    </>
  );
}

PopupFormButton.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  titlePlacement: PropTypes.string,
  popOverPlacement: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  Form: PropTypes.func.isRequired,
  onFormSuccess: PropTypes.func,
};

PopupFormButton.defaultProps = {
  id: undefined,
  onFormSuccess: () => null,
  title: null,
  titlePlacement: "right-start",
  popOverPlacement: "right-start",
};
