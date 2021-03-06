import React from "react";
import { Row, Col } from "reactstrap";

import {
  ContentSection,
  CustomMapBadge,
  Details,
  Toaster,
  UserBubble,
  FallBackLoading,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

// constants
const statusColorMap = {
  active: "info",
  ongoing: "dark",
  paid: "success",
  canceled: "danger",
  incomplete: "warning",
};
const exampleToasts = [
  { header: "Info", body: "Example text", color: "info" },
  { header: "Light", body: "Example text", color: "light" },
  { header: "Primary", body: "Example text", color: "primary" },
  { header: "Success", body: "Example text", color: "success" },
  { header: "Danger", body: "Example text", color: "danger", showToggle: true },
  {
    header: "Warning",
    body: "Example text",
    color: "warning",
    showToggle: true,
  },
];
const userInfo = {
  first_name: "Jane",
  last_name: "Doe",
  username: "jane.doe",
};

// component
export default function Misc(props) {
  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="CustomMapBadge"
        bodyNode={
          <div className="d-flex justify-content-around">
            {Object.keys(statusColorMap).map((status) => (
              <CustomMapBadge
                key={status}
                statusColorMap={statusColorMap}
                status={status}
              />
            ))}
          </div>
        }
      />
      <ComponentAsExample
        name="Details"
        bodyNode={
          <Details clickCoversRegion>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              reprehenderit, ratione ullam laboriosam suscipit ipsa tempore?
              Deleniti placeat ad reprehenderit, sequi officia amet itaque
              temporibus? Expedita illum rem corrupti earum!
            </p>
          </Details>
        }
      />
      <ComponentAsExample
        name="Toaster"
        bodyNode={
          <Row className="row-cols-lg-3 g-2">
            {exampleToasts.map((toast) => (
              <Col key={toast.color}>
                <Toaster
                  id={`toaster__${toast.color}`}
                  {...toast}
                />
              </Col>
            ))}
          </Row>
        }
      />
      <ComponentAsExample
        name="UserBubble"
        bodyNode={
          <div className="d-flex justify-content-around align-items-start">
            <UserBubble
              className="bg-light text-darker"
              size="xs"
              userInfo={userInfo}
            />
            <UserBubble
              className="bg-light text-darker"
              size="sm"
              userInfo={userInfo}
            />
          </div>
        }
      />
      <ComponentAsExample
        name="FallBackLoading"
        bodyNode={
          <Row>
            <Col>
              <FallBackLoading className="mt-5" />
            </Col>
            <Col>
              <FallBackLoading text="custom text..." className="mt-5" />
            </Col>
          </Row>
        }
      />
      <ComponentAsExample
        name="AxiosLoadingBar"
        bodyNode={<small className="fst-italic">todo</small>}
      />
    </ContentSection>
  );
}
