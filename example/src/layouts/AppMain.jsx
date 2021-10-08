import React from "react";
import { Switch, Redirect, useRouteMatch } from "react-router-dom";
import { Container, Col, Nav, TabContent } from "reactstrap";
import { FaGithub } from "react-icons/fa";

import {
  ContentSection,
  FallBackLoading,
  useRouterTabs,
} from "@certego/certego-ui";

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
        path: `${match.url}alerts`,
        Title: () => <span>Alerts</span>,
        Component: React.lazy(() => import("../sections/Alerts")),
      },
      {
        key: "buttons",
        path: `${match.url}buttons`,
        Title: () => <span>Buttons</span>,
        Component: React.lazy(() => import("../sections/Buttons")),
      },
      {
        key: "charts",
        path: `${match.url}charts`,
        Title: () => <span>Charts</span>,
        Component: React.lazy(() => import("../sections/Charts")),
      },
      {
        key: "containers",
        path: `${match.url}containers`,
        Title: () => <span>Containers</span>,
        Component: React.lazy(() => import("../sections/Containers")),
      },
      {
        key: "form",
        path: `${match.url}form`,
        Title: () => <span>Form</span>,
        Component: React.lazy(() => import("../sections/Form")),
      },
      {
        key: "icons",
        path: `${match.url}icons`,
        Title: () => <span>Icons</span>,
        Component: React.lazy(() => import("../sections/Icons")),
      },
      {
        key: "lists",
        path: `${match.url}lists`,
        Title: () => <span>Lists</span>,
        Component: React.lazy(() => import("../sections/Lists")),
      },
      {
        key: "misc",
        path: `${match.url}misc`,
        Title: () => <span>Misc</span>,
        Component: React.lazy(() => import("../sections/Misc")),
      },
      {
        key: "nav",
        path: `${match.url}nav`,
        Title: () => <span>Navigation</span>,
        Component: React.lazy(() => import("../sections/Nav")),
      },
      {
        key: "table",
        path: `${match.url}table`,
        Title: () => <span>Table</span>,
        Component: React.lazy(() => import("../sections/Table")),
      },
      {
        key: "tabs",
        path: `${match.url}tabs`,
        Title: () => <span>Tabs</span>,
        Component: React.lazy(() => import("../sections/Tabs")),
      },
      {
        key: "text",
        path: `${match.url}text`,
        Title: () => <span>Text</span>,
        Component: React.lazy(() => import("../sections/Text")),
      },
      {
        key: "time",
        path: `${match.url}time`,
        Title: () => <span>Time</span>,
        Component: React.lazy(() => import("../sections/Time")),
      },
    ],
    [match.url]
  );

  // call hook
  const { activeTab, renderNavItems, renderRoutes } = useRouterTabs({ routes });

  return (
    <Container fluid className="d-flex flex-wrap">
      <Col md={4} lg={2} className="mx-md-auto mx-lg-0">
        <ContentSection className="p-0 bg-body shadow sticky-top">
          <Nav tabs vertical>
            {renderNavItems()}
          </Nav>
        </ContentSection>
      </Col>
      <Col md={12} lg={10}>
        <div className="d-flex">
          <h1>{capitalize(activeTab)}</h1>
          <i className="ml-3 float-right">
            <a
              href={buildGitHubPath(activeTab)}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub />
            </a>
          </i>
        </div>
        <TabContent activeTab={activeTab} className="bg-dark">
          <React.Suspense fallback={<FallBackLoading />}>
            <Switch>
              {renderRoutes()}
              {/* Redirects all unknown paths to first one in the list */}
              <Redirect from="/" to={routes[0].path} />
            </Switch>
          </React.Suspense>
        </TabContent>
      </Col>
    </Container>
  );
}
