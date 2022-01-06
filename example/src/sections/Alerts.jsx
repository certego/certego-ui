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
            <IconAlert id="iconalert-1" color="secondary">
              Secondary!
            </IconAlert>
            <IconAlert id="iconalert-2" color="info">
              Info!
            </IconAlert>
            <IconAlert id="iconalert-3" color="success">
              Success!
            </IconAlert>
            <IconAlert id="iconalert-4" color="danger">
              Danger!
            </IconAlert>
            <IconAlert id="iconalert-5" color="warning">
              Warning!
            </IconAlert>
            <IconAlert id="iconalert-6" color="accent-1">
              Accent-1!
            </IconAlert>
            <IconAlert id="iconalert-7" color="accent-2">
              Accent-2!
            </IconAlert>
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
