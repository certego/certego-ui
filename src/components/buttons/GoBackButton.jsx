import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import useHoverDirty from "react-use/lib/useHoverDirty";

import { Fade } from "reactstrap";
import IconButton from "./IconButton";

function GoBackIcon({onlyIcon, isHovering,}) {
  return (
    <>
      <MdArrowBackIosNew />
      {!onlyIcon
        ? "go back"
        : isHovering && (
            <Fade
              transitionAppear={false}
              transitionEnter={false}
              tag="span"
            >
              go back
            </Fade>
          )}
    </>
  );
};

GoBackIcon.propTypes = {
  isHovering: PropTypes.bool.isRequired,
  onlyIcon: PropTypes.bool.isRequired,
};

export default function GoBackButton({ onlyIcon, ...restProps }) {
  // router
  const navigate = useNavigate();

  // ref
  const backArrowRef = React.useRef(null);
  const isHovering = useHoverDirty(backArrowRef, onlyIcon); // enable for onlyIcon

  const BackIcon = () => React.useMemo(() =>
    <>
      <MdArrowBackIosNew />
      {!onlyIcon
        ? "go back"
        : isHovering && (
            <Fade
              transitionAppear={false}
              transitionEnter={false}
              tag="span"
            >
              go back
            </Fade>
          )}
    </>, []);

  return (
    <IconButton
      id="gobackbutton"
      innerRef={backArrowRef}
      onClick={() => navigate(-1)}
      Icon={BackIcon}
      style={{ border: "none", padding: "0.1rem 0.2rem", }}
      size="sm"
      color="accent-2"
      {...restProps}
    />
  );
}

GoBackButton.propTypes = {
  onlyIcon: PropTypes.bool,
};

GoBackButton.defaultProps = {
  onlyIcon: true,
};
