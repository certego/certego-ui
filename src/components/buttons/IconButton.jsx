import React from "react";
import PropTypes from "prop-types";
import { Button, UncontrolledTooltip } from "reactstrap";

function IconButton(props) {
  // props
  const { id, title, titlePlacement, Icon, ...rest } = props;

  // vars
  const btnId = `${id}-iconbtn`;

  return (
    <>
      <Button id={btnId} {...rest}>
        <Icon />
      </Button>
      <UncontrolledTooltip
        target={btnId}
        placement={titlePlacement}
        delay={{ show: 0 }}
      >
        {title}
      </UncontrolledTooltip>
    </>
  );
}

IconButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titlePlacement: PropTypes.string,
  Icon: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  titlePlacement: "right-start",
};

export default IconButton;
