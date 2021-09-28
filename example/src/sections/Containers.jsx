import React from "react";
import { Row } from "reactstrap";

import { ContentSection, SmallInfoCard } from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

export default function Containers(props) {
  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="ContentSection"
        bodyNode={
          <>
            <Row className="d-flex justify-content-around">
              <ContentSection className="col-3 bg-dark">Dark</ContentSection>
              <ContentSection className="col-3 bg-darker">
                Darker
              </ContentSection>
              <ContentSection className="col-3 bg-body">
                Body background
              </ContentSection>
            </Row>
            <Row className="d-flex justify-content-around">
              <ContentSection className="col-3 bg-dark shadow">
                With shadow
              </ContentSection>
              <ContentSection className="col-3 bg-darker shadow">
                With shadow
              </ContentSection>
              <ContentSection className="col-3 bg-body shadow">
                With shadow
              </ContentSection>
            </Row>
            <Row className="d-flex justify-content-around">
              <ContentSection className="col-3 bg-dark glow">
                With glow
              </ContentSection>
              <ContentSection className="col-3 bg-darker glow">
                With glow
              </ContentSection>
              <ContentSection className="col-3 bg-body glow">
                With glow
              </ContentSection>
            </Row>
          </>
        }
      />
      <ComponentAsExample
        name="SmallInfoCard"
        bodyNode={
          <SmallInfoCard
            header={"Example Header"}
            body={
              <p className="pt-2 pb-0 px-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                amet fugit labore, est eius voluptatum quam adipisci sit
                incidunt illo, magni ad quasi consequatur laudantium id? Ex
                debitis officia ullam?
              </p>
            }
            foo
          />
        }
      />
    </ContentSection>
  );
}
