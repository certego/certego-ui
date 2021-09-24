import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { UncontrolledTooltip, Spinner } from "reactstrap";
import { MdSync } from "react-icons/md";

export default function SyncButton(props) {
  const { onClick, className, title, ...restProps } = props;

  // state
  const [wasClicked, setClicked] = React.useState(false);

  // debounced
  const onClickCb = React.useCallback(
    async (e) => {
      setClicked(true);
      await onClick(e);
      setTimeout(() => setClicked(false), 500);
    },
    [setClicked, onClick]
  );

  return (
    <div id="syncBtn" className={classnames("h4", className)} {...restProps}>
      {!wasClicked ? (
        <MdSync className="pointer" onClick={onClickCb} />
      ) : (
        <Spinner type="ripple" size="sm" className="m-1" />
      )}
      <UncontrolledTooltip placement="top" target="syncBtn">
        {title}
      </UncontrolledTooltip>
    </div>
  );
}

SyncButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

SyncButton.defaultProps = {
  className: null,
  title: "Sync with server",
};
