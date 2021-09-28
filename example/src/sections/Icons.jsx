import React from "react";
import { Row } from "reactstrap";

import {
  ContentSection,
  ArrowToggleIcon,
  BooleanIcon,
  LinkOpenViewIcon,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

export default function Icons(props) {
  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="ArrowToggleIcon"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <ArrowToggleIcon isExpanded />
            <ArrowToggleIcon isExpanded={false} />
          </Row>
        }
      />
      <ComponentAsExample
        name="BooleanIcon"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <BooleanIcon truthy />
            <BooleanIcon truthy={false} />
          </Row>
        }
      />
      <ComponentAsExample
        name="LinkOpenViewIcon"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <LinkOpenViewIcon
              id="linkopen-example-1"
              tooltip="Example #1"
              href="#"
            />
            <LinkOpenViewIcon
              className="text-info"
              id="linkopen-example-2"
              tooltip="Example #2"
              href="#"
            />
            <LinkOpenViewIcon
              className="text-gradient"
              id="linkopen-example-3"
              tooltip="Example #3"
              href="#"
            />
          </Row>
        }
      />
    </ContentSection>
  );
}
