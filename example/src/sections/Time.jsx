import React from "react";
import { Row } from "reactstrap";

import {
  ContentSection,
  ElasticTimePicker,
  MomentHoverable,
  useTimePickerStore,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

export default function Time(props) {
  const { range, fromTimeIsoStr, onTimeIntervalChange } = useTimePickerStore();

  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="ElasticTimePicker"
        bodyNode={
          <Row className="center">
            <small className="text-muted font-italic my-1">
              fromTimeIsoStr = currentTime - {range}
            </small>
            <ElasticTimePicker
              id="timepicker-example-1"
              defaultSelected={range}
              onChange={onTimeIntervalChange}
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
              value={fromTimeIsoStr}
              showAgo
            />
            <MomentHoverable
              id="momenthoverable-example-2"
              value={fromTimeIsoStr}
              showAgo
              format="hh:mm:ss A Z"
            />
            <MomentHoverable
              id="momenthoverable-example-3"
              value={fromTimeIsoStr}
              showAgo
              format="D/M/YYYY"
            />
          </Row>
        }
      />
    </ContentSection>
  );
}
