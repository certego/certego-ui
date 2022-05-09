import React from "react";

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
          <div className="d-flex justify-content-around">
              <ArrowToggleIcon isExpanded />
              <ArrowToggleIcon isExpanded={false} />
          </div>
        }
      />
      <ComponentAsExample
        name="BooleanIcon"
        bodyNode={
          <>
            <div className="d-flex justify-content-around">
              <BooleanIcon truthy />
              <BooleanIcon truthy={false} />
            </div>
            <div className="mt-2 d-flex justify-content-around">
              <BooleanIcon truthy withColors />
              <BooleanIcon truthy={false} withColors />
            </div>
            <div className="mt-2 d-flex justify-content-around">
              <BooleanIcon truthy outline={false} />
              <BooleanIcon truthy={false} outline={false} />
            </div>
            <div className="mt-2 d-flex justify-content-around">
              <BooleanIcon truthy withColors outline={false} />
              <BooleanIcon truthy={false} withColors outline={false} />
            </div>
          </>
        }
      />
      <ComponentAsExample
        name="LinkOpenViewIcon"
        bodyNode={
          <div className="d-flex justify-content-around">
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
          </div>
        }
      />
    </ContentSection>
  );
}
