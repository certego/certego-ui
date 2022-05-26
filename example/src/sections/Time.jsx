import React from "react";

import {
  ContentSection,
  ElasticTimePicker,
  DateHoverable,
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
          <div className="d-flex align-items-center flex-column">
            <small className="text-muted fst-italic my-1">
              fromTimeIsoStr = currentTime - {range}
            </small>
            <ElasticTimePicker
              id="timepicker-example-1"
              defaultSelected={range}
              onChange={onTimeIntervalChange}
            />
          </div>
        }
      />
      <ComponentAsExample
        name="DateHoverable"
        bodyNode={
          <div className="d-flex justify-content-around">
            <DateHoverable
              id="datehoverable-example-1"
              value={fromTimeIsoStr}
              showAgo
            />
            <DateHoverable
              id="datehoverable-example-2"
              value={fromTimeIsoStr}
              showAgo
              format="pp xxx"
            />
            <DateHoverable
              id="datehoverable-example-3"
              value={fromTimeIsoStr}
              showAgo
              format="d/M/yyyy"
            />
          </div>
        }
      />
    </ContentSection>
  );
}
