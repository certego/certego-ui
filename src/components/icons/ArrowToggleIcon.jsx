import React from "react";
import PropTypes from "prop-types";

import { MdExpandLess, MdExpandMore } from "react-icons/md";
import classNames from "classnames";

function ArrowToggleIcon(props) {
  const { isExpanded, className, ...rest } = props;
  const cls = classNames("pointer bg-tertiary rounded-pill", className);

  return isExpanded ? (
    <MdExpandLess size="20px" className={cls} {...rest} />
  ) : (
    <MdExpandMore size="20px" className={cls} {...rest} />
  );
}

ArrowToggleIcon.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

ArrowToggleIcon.defaultProps = {
  className: null,
};

export default ArrowToggleIcon;
