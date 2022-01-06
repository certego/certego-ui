import React from "react";
import { Card } from "reactstrap";

import { ContentSection, Tabs, RouterTabs } from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

// constants
const tabTitles = ["Tab #1", "Tab #2", "Tab #3"];
const tabRenderables = [
  () => <Card className="p-2">Example Text #1</Card>,
  () => <Card className="p-2">Example Text #2</Card>,
  () => <Card className="p-2">Example Text #3</Card>,
];

export default function TabsExample(props) {
  const routes = React.useMemo(
    () => [
      {
        key: "tabs__tab1",
        location: { pathname: "/tabs", search: "?tab=tab1" },
        Title: () => <span>{tabTitles[0]}</span>,
        Component: tabRenderables[0],
      },
      {
        key: "tabs__tab2",
        location: { pathname: "/tabs", search: "?tab=tab2" },
        Title: () => <span>{tabTitles[1]}</span>,
        Component: tabRenderables[1],
      },
      {
        key: "tabs__tab3",
        location: { pathname: "/tabs", search: "?tab=tab3" },
        Title: () => <span>{tabTitles[2]}</span>,
        Component: tabRenderables[2],
      },
    ],
    []
  );

  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="Tabs"
        bodyNode={
          <>
            <h6 className="text-gradient">Horizontal</h6>
            <ContentSection className="bg-body">
              <Tabs tabTitles={tabTitles} renderables={tabRenderables} />
            </ContentSection>
            <h6 className="text-gradient">Vertical</h6>
            <ContentSection className="bg-body d-flex justify-content-around align-items-start">
              <Tabs
                vertical
                tabTitles={tabTitles}
                renderables={tabRenderables}
              />
            </ContentSection>
          </>
        }
      />
      <ComponentAsExample
        name="RouterTabs"
        bodyNode={
          <>
            <h6 className="text-gradient">Horizontal</h6>
            <ContentSection className="bg-body">
              <RouterTabs routes={routes} />
            </ContentSection>
            <h6 className="text-gradient">Vertical</h6>
            <ContentSection className="bg-body d-flex justify-content-around align-items-start">
              <RouterTabs routes={routes} vertical />
            </ContentSection>
          </>
        }
      />
      <ComponentAsExample
        name="useRouterTabs"
        bodyNode={<div>The navbar on the left side. :)</div>}
      />
    </ContentSection>
  );
}
