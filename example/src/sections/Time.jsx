import React from "react";
import { Row } from "reactstrap";

import {
  ContentSection,
  ElasticTimePicker,
  MomentHoverable,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

// constants
const RANGE_DATEFORMAT_MAP = {
  "6h": "DD/MM, HH:mm",
  "24h": "DD/MM, HH:mm",
  "7d": "Do MMM",
  "6M": "MMM/YYYY",
  "2Y": "YYYY",
};
const DEFAULT_INTERVAL = "24h";

export default function Time(props) {
  const [[intervalStr, intervalTime], setIntervalChoice] = React.useState([
    DEFAULT_INTERVAL,
    "",
  ]);

  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="ElasticTimePicker"
        bodyNode={
          <Row className="center">
            <small className="text-muted font-italic my-1">
              ~ currentTime - {intervalStr}
            </small>
            <ElasticTimePicker
              id="timepicker-example-1"
              defaultSelected={DEFAULT_INTERVAL}
              intervals={Object.keys(RANGE_DATEFORMAT_MAP)}
              onChange={(ch, time) => setIntervalChoice([ch, time])}
            />
          </Row>
        }
      />
      <ComponentAsExample
        name="MomentHoverable"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <MomentHoverable
              id="momenthoverable-example-1"
              value={intervalTime}
              showAgo
            />
            <MomentHoverable
              id="momenthoverable-example-2"
              value={intervalTime}
              showAgo
              format={"hh:mm:ss A Z"}
            />
            <MomentHoverable
              id="momenthoverable-example-3"
              value={intervalTime}
              showAgo
              format={"D/M/YYYY"}
            />
          </Row>
        }
      />
    </ContentSection>
  );
}
