import React from "react";
import { Row, Col } from "reactstrap";

import {
  ContentSection,
  SmallInfoCard,
  Loader,
  LoadingBoundary,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

export default function Containers(props) {
  const [loading, setLoading] = React.useState(true);

  // onComponentMount
  React.useEffect(() => {
    const interval = setInterval(() => setLoading((s) => !s), 2000);
    return () => clearInterval(interval);
  }, [setLoading]);

  const exampleRenderFn = React.useCallback(
    () => (
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            odit? Saepe earum nostrum rerum quasi nisi illo sit. Numquam nesciunt
            pariatur natus alias aperiam. Repellat velit perspiciatis sed rem
            commodi!
          </p>
          <p className="text-muted">Will refetch in a second...</p>
        </Col>
      </Row>
    ),
    []
  );

  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="ContentSection"
        bodyNode={
          <>
            <div className="d-flex justify-content-around">
              <ContentSection className="col-3 bg-dark">Dark</ContentSection>
              <ContentSection className="col-3 bg-darker">
                Darker
              </ContentSection>
              <ContentSection className="col-3 bg-body">
                Body background
              </ContentSection>
            </div>
            <div className="d-flex justify-content-around">
              <ContentSection className="col-3 bg-dark shadow">
                With shadow
              </ContentSection>
              <ContentSection className="col-3 bg-darker shadow">
                With shadow
              </ContentSection>
              <ContentSection className="col-3 bg-body shadow">
                With shadow
              </ContentSection>
            </div>
            <div className="d-flex justify-content-around">
              <ContentSection className="col-3 bg-dark glow">
                With glow
              </ContentSection>
              <ContentSection className="col-3 bg-darker glow">
                With glow
              </ContentSection>
              <ContentSection className="col-3 bg-body glow">
                With glow
              </ContentSection>
            </div>
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
          />
        }
      />
      <ComponentAsExample
        name="Loader"
        bodyNode={<Loader loading={loading} render={exampleRenderFn} />}
      />
      <ComponentAsExample
        name="LoadingBoundary"
        bodyNode={
          <LoadingBoundary
            render={exampleRenderFn}
            error={{
              response: {
                status: 404,
                statusText: "Not Found",
              },
              parsedMsg: "An error occured.",
            }}
          />
        }
      />
    </ContentSection>
  );
}
