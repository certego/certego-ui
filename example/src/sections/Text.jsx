import React from "react";
import { Row } from "reactstrap";

import { ContentSection, SlicedText } from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

export default function Texts(props) {
  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="SlicedText"
        bodyNode={
          <Row className="d-flex justify-content-around">
            <SlicedText
              id="slicedtext-example-1"
              value={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus sunt tempore consectetur"
              }
              cutoffLength={20}
            />
            <SlicedText
              id="slicedtext-example-2"
              value={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus sunt tempore consectetur"
              }
              cutoffLength={50}
            />
          </Row>
        }
      />
    </ContentSection>
  );
}
