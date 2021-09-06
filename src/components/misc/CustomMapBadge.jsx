import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";

export default function CustomMapBadge(props) {
  const { status, statusColorMap, defaultColor, ...rest } = props;
  const color = statusColorMap[status] ? statusColorMap[status] : defaultColor;
  return (
    <Badge color={color} className="user-select-none text-larger" {...rest}>
      {status}
    </Badge>
  );
}

CustomMapBadge.propTypes = {
  status: PropTypes.string.isRequired,
  statusColorMap: PropTypes.object.isRequired,
  defaultColor: PropTypes.string,
};

CustomMapBadge.defaultProps = {
  defaultColor: "light",
};
