import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import useHoverDirty from "react-use/lib/useHoverDirty";

import { Fade } from "reactstrap";
import IconButton from "./IconButton";

export default function GoBackButton({ onlyIcon, ...restProps }) {
  // router
  const history = useHistory();

  // ref
  const backArrowRef = React.useRef(null);
  const isHovering = useHoverDirty(backArrowRef, onlyIcon); // enable for onlyIcon

  return (
    <IconButton
      id="gobackbutton"
      innerRef={backArrowRef}
      onClick={history.goBack}
      Icon={() => (
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
      )}
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
