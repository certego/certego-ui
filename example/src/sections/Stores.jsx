import React from "react";
import { Row, Button } from "reactstrap";

import { ContentSection, useToastr } from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";
import { capitalize } from "../utils";

// constants
const stateSelector = (state) => ({
  addToast: state.addToast,
});

export default function Stores(props) {
  const { addToast } = useToastr(stateSelector);

  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="useToastr"
        bodyNode={
          <Row className="d-flex justify-content-around">
            {["info", "primary", "success", "warning", "danger"].map(
              (color) => (
                <Button
                  size="sm"
                  key={color}
                  color={color}
                  onClick={() =>
                    addToast(capitalize(color), "Example text", color, true)
                  }
                >
                  {color}
                </Button>
              )
            )}
          </Row>
        }
      />
      <ComponentAsExample
        name="useTimePickerStore"
        bodyNode={
          <div>
            As shown in <mark>ElasticTimePicker</mark>.
          </div>
        }
      />
    </ContentSection>
  );
}
