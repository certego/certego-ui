import React from "react";
import PropTypes from "prop-types";
import { Button, UncontrolledTooltip } from "reactstrap";
import { nanoid } from "nanoid";

function IconButton(props) {
  // props
  const { id, title, titlePlacement, Icon, ...rest } = props;

  // vars
  const btnId = id || `iconbtn-${nanoid(4)}`;

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
  id: PropTypes.string,
  title: PropTypes.string,
  titlePlacement: PropTypes.string,
  Icon: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  id: undefined,
  title: undefined,
  titlePlacement: "right-start",
};

export default IconButton;
