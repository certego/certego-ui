import React from "react";
import PropTypes from "prop-types";
import { UncontrolledTooltip, Spinner } from "reactstrap";
import { MdSync } from "react-icons/md";

function SyncButton(props) {
  const { onClick } = props;

  // state
  const [wasClicked, setClicked] = React.useState(false);

  // debounced
  const onClickCb = React.useCallback(async (e) => {
    setClicked(true);
    await onClick(e);
    setTimeout(() => setClicked(false), 500);
  });

  return (
    <div id="syncBtn" className="h4">
      {!wasClicked ? (
        <MdSync className="pointer" onClick={onClickCb} />
      ) : (
        <Spinner type="ripple" size="sm" className="m-1" />
      )}
      <UncontrolledTooltip placement="top" target="syncBtn">
        Sync with server
      </UncontrolledTooltip>
    </div>
  );
}

SyncButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SyncButton;
