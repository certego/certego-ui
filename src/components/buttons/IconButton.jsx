import React from "react";
import PropTypes from "prop-types";
import { Button, UncontrolledTooltip } from "reactstrap";

function IconButton(props) {
  // props
  const { id, title, titlePlacement, Icon, ...rest } = props;

  // vars
  const btnId = `${id}-iconbtn`;

  return (
    <Button id={btnId} type="button" {...rest}>
      <Icon />
      {title && (
        <UncontrolledTooltip
          target={btnId}
          placement={titlePlacement}
          delay={{ show: 0, }}
        >
          {title}
        </UncontrolledTooltip>
      )}
    </Button>
  );
}

IconButton.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  titlePlacement: PropTypes.string,
  Icon: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  title: undefined,
  titlePlacement: "right-start",
};

export default IconButton;
