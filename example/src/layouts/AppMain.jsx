import React from "react";
import { Container, Row, Col, Nav } from "reactstrap";
import { FaGithub } from "react-icons/fa";

import { ContentSection, useRouterTabs } from "@certego/certego-ui";

import { capitalize, buildGitHubPath } from "../utils";

// component
export default function AppMain() {

  // dynamic routes as tabs
  const routes = React.useMemo(
    () => [
      {
        key: "alerts",
        location: "/alerts",
        Title: () => <span>Alerts</span>,
        Component: React.lazy(() => import("../sections/Alerts")),
      },
      {
        key: "buttons",
        location: "/buttons",
        Title: () => <span>Buttons</span>,
        Component: React.lazy(() => import("../sections/Buttons")),
      },
      {
        key: "charts",
        location: "/charts",
        Title: () => <span>Charts</span>,
        Component: React.lazy(() => import("../sections/Charts")),
      },
      {
        key: "containers",
        location: "/containers",
        Title: () => <span>Containers</span>,
        Component: React.lazy(() => import("../sections/Containers")),
      },
      {
        key: "form",
        location: "/form",
        Title: () => <span>Form</span>,
        Component: React.lazy(() => import("../sections/Form")),
      },
      {
        key: "icons",
        location: "/icons",
        Title: () => <span>Icons</span>,
        Component: React.lazy(() => import("../sections/Icons")),
      },
      {
        key: "lists",
        location: "/lists",
        Title: () => <span>Lists</span>,
        Component: React.lazy(() => import("../sections/Lists")),
      },
      {
        key: "misc",
        location: "/misc",
        Title: () => <span>Misc</span>,
        Component: React.lazy(() => import("../sections/Misc")),
      },
      {
        key: "nav",
        location: "/nav",
        Title: () => <span>Navigation</span>,
        Component: React.lazy(() => import("../sections/Nav")),
      },
      {
        key: "table",
        location: "/table",
        Title: () => <span>Table</span>,
        Component: React.lazy(() => import("../sections/Table")),
      },
      {
        key: "tabs",
        location: "/tabs",
        Title: () => <span>Tabs</span>,
        Component: React.lazy(() => import("../sections/Tabs")),
      },
      {
        key: "text",
        location: "/text",
        Title: () => <span>Text</span>,
        Component: React.lazy(() => import("../sections/Text")),
      },
      {
        key: "time",
        location: "/time",
        Title: () => <span>Time</span>,
        Component: React.lazy(() => import("../sections/Time")),
      },
      {
        key: "stores",
        location: "/stores",
        Title: () => <span>Stores (hooks)</span>,
        Component: React.lazy(() => import("../sections/Stores")),
      },
    ], []
  );

  // call hook
  const { activeKey, renderNavItems, renderRoutes } = useRouterTabs({
    routes,
    redirect: true,
  });

  return (
    <Container fluid>
      <Row>
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
            <i className="ms-3 float-end">
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
      </Row>
    </Container>
  );
}
