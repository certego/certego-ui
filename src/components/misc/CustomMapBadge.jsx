import React from "react";
import { Badge } from "reactstrap";

export default function CustomMapBadge({ status, statusColorMap, defaultColor = "light", ...rest }) {
  const color = statusColorMap[status] ? statusColorMap[status] : defaultColor;
  return (
    <Badge color={color} className="user-select-none text-larger" {...rest}>
      {status}
    </Badge>
  );
}

