import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { ListGroup, ListGroupItem, Col } from "reactstrap";

import Details from "../misc/Details";
import { isObject } from "../../utils";

function recurseArray(key, arr) {
  return (
    <Details title="Toggle expand" clickCoversRegion>
      {arr.map((val, i) => (
        <p
          // eslint-disable-next-line react/no-array-index-key
          key={`kvlist-strlist__${key}-${
            isObject(val) ? val?.name || val?.structure : val?.replace(" ", "")
          }-${i}`}
          className={classnames("mb-1 p-1 border border-tertiary", {
            small: !isObject(val),
          })}
        >
          {isObject(val) ? recurseObjectList(val) : val}
        </p>
      ))}
    </Details>
  );
}

function recurseObjectList(obj) {
  if (!obj) return null;
  return Object.entries(obj).map(([key, val]) => (
    <ListGroupItem key={`kvlist-objlist__${key}-${val}`}>
      <span className="text-gray">{key}:</span>
      <span className="ml-2">
        {isObject(val) ? recurseObjectList(val) : val}
      </span>
    </ListGroupItem>
  ));
}

export default function KvList(props) {
  const { object, ...rest } = props;

  const entries = Object.entries(object);
  return (
    <ListGroup className="kv-list" {...rest}>
      {entries.map(([key, val]) => (
        <ListGroupItem key={`kvlist__${key}`}>
          <Col sm={4} md={2} lg={2} className="list-key text-capitalize">
            {key}
          </Col>
          <Col className="list-value">
            {/* eslint-disable-next-line no-nested-ternary */}
            {isObject(val)
              ? Array.isArray(val)
                ? recurseArray(key, val)
                : recurseObjectList(val)
              : val}
          </Col>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

KvList.propTypes = {
  object: PropTypes.object.isRequired,
};
