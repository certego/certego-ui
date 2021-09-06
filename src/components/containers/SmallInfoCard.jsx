import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Card, CardBody, CardHeader } from "reactstrap";

function SmallInfoCard({ header, body, className, ...rest }) {
  return (
    <Card className={classNames("flat border-dark", className)} {...rest}>
      <CardHeader className="bg-dark h5 text-center">{header}</CardHeader>
      <CardBody className="bg-body p-0">{body}</CardBody>
    </Card>
  );
}

SmallInfoCard.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  className: PropTypes.string,
};

SmallInfoCard.defaultProps = {
  className: undefined,
};

export default SmallInfoCard;
