import React from "react";
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

export default function GoBackButton({ onlyIcon = true, ...restProps }) {
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
      color="accent-2"
      className="btn-sm"
      {...restProps}
    />
  );
}

