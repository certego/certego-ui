import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Container, Col, Nav } from "reactstrap";
import { FaGithub } from "react-icons/fa";

import { ContentSection, useRouterTabs } from "@certego/certego-ui";

import { capitalize, buildGitHubPath } from "../utils";

// component
export default function AppMain() {
  // to get current URL
  const match = useRouteMatch();

  // dynamic routes as tabs
  const routes = React.useMemo(
    () => [
      {
        key: "alerts",
        location: { pathname: `${match.url}alerts` },
        Title: () => <span>Alerts</span>,
        Component: React.lazy(() => import("../sections/Alerts")),
      },
      {
        key: "buttons",
        location: { pathname: `${match.url}buttons` },
        Title: () => <span>Buttons</span>,
        Component: React.lazy(() => import("../sections/Buttons")),
      },
      {
        key: "charts",
        location: { pathname: `${match.url}charts` },
        Title: () => <span>Charts</span>,
        Component: React.lazy(() => import("../sections/Charts")),
      },
      {
        key: "containers",
        location: { pathname: `${match.url}containers` },
        Title: () => <span>Containers</span>,
        Component: React.lazy(() => import("../sections/Containers")),
      },
      {
        key: "form",
        location: { pathname: `${match.url}form` },
        Title: () => <span>Form</span>,
        Component: React.lazy(() => import("../sections/Form")),
      },
      {
        key: "icons",
        location: { pathname: `${match.url}icons` },
        Title: () => <span>Icons</span>,
        Component: React.lazy(() => import("../sections/Icons")),
      },
      {
        key: "lists",
        location: { pathname: `${match.url}lists` },
        Title: () => <span>Lists</span>,
        Component: React.lazy(() => import("../sections/Lists")),
      },
      {
        key: "misc",
        location: { pathname: `${match.url}misc` },
        Title: () => <span>Misc</span>,
        Component: React.lazy(() => import("../sections/Misc")),
      },
      {
        key: "nav",
        location: { pathname: `${match.url}nav` },
        Title: () => <span>Navigation</span>,
        Component: React.lazy(() => import("../sections/Nav")),
      },
      {
        key: "table",
        location: { pathname: `${match.url}table` },
        Title: () => <span>Table</span>,
        Component: React.lazy(() => import("../sections/Table")),
      },
      {
        key: "tabs",
        location: { pathname: `${match.url}tabs` },
        Title: () => <span>Tabs</span>,
        Component: React.lazy(() => import("../sections/Tabs")),
      },
      {
        key: "text",
        location: { pathname: `${match.url}text` },
        Title: () => <span>Text</span>,
        Component: React.lazy(() => import("../sections/Text")),
      },
      {
        key: "time",
        location: { pathname: `${match.url}time` },
        Title: () => <span>Time</span>,
        Component: React.lazy(() => import("../sections/Time")),
      },
      {
        key: "stores",
        location: { pathname: `${match.url}stores` },
        Title: () => <span>Stores (hooks)</span>,
        Component: React.lazy(() => import("../sections/Stores")),
      },
    ],
    [match.url]
  );

  // call hook
  const { activeKey, renderNavItems, renderRoutes } = useRouterTabs({
    routes,
    redirect: true,
  });

  return (
    <Container fluid className="d-flex flex-wrap">
      <Col md={4} lg={3} xl={2} className="mx-md-auto mx-lg-0">
        <ContentSection className="p-0 bg-body shadow sticky-top">
          <Nav tabs vertical>
            {renderNavItems()}
          </Nav>
        </ContentSection>
      </Col>
      <Col md={12} lg={9} xl={10}>
        <div className="d-flex">
          <h1>{capitalize(activeKey)}</h1>
          <i className="ml-3 float-right">
            <a
              href={buildGitHubPath(activeKey)}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
          </i>
        </div>
        {renderRoutes()}
      </Col>
    </Container>
  );
}
