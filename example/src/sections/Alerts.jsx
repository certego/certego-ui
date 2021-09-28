import React from "react";

import { ContentSection, ErrorAlert, IconAlert } from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

export default function Alerts(props) {
  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="IconAlert"
        bodyNode={
          <>
            <IconAlert color="secondary">Secondary!</IconAlert>
            <IconAlert color="info">Info!</IconAlert>
            <IconAlert color="success">Success!</IconAlert>
            <IconAlert color="danger">Danger!</IconAlert>
            <IconAlert color="warning">Warning!</IconAlert>
            <IconAlert color="accent-1">Accent-1!</IconAlert>
            <IconAlert color="accent-2">Accent-2!</IconAlert>
          </>
        }
      />
      <ComponentAsExample
        name="ErrorAlert"
        bodyNode={
          <>
            <ErrorAlert
              error={{
                response: {
                  status: 404,
                  statusText: "Not Found",
                },
                parsedMsg: "An error occured.",
              }}
            />
            <ErrorAlert
              error={{
                response: {
                  status: 500,
                  statusText: "Internal Server Error",
                },
                parsedMsg: "An error occured.",
              }}
            />
          </>
        }
      />
    </ContentSection>
  );
}
