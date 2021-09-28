import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Container, Col, Nav, TabContent } from "reactstrap";
import { FaGithub } from "react-icons/fa";

import {
  ContentSection,
  FallBackLoading,
  useRouterTabs,
} from "@certego/certego-ui";

import { capitalize, buildGitHubPath } from "./utils";

// component
export default function App() {
  const routes = React.useMemo(
    () => [
      {
        key: "alerts",
        path: `/alerts`,
        Title: () => <span>Alerts</span>,
        Component: React.lazy(() => import("./sections/Alerts")),
      },
      {
        key: "buttons",
        path: `/buttons`,
        Title: () => <span>Buttons</span>,
        Component: React.lazy(() => import("./sections/Buttons")),
      },
      {
        key: "containers",
        path: `/containers`,
        Title: () => <span>Containers</span>,
        Component: React.lazy(() => import("./sections/Containers")),
      },
      {
        key: "icons",
        path: `/icons`,
        Title: () => <span>Icons</span>,
        Component: React.lazy(() => import("./sections/Icons")),
      },
      {
        key: "lists",
        path: `/lists`,
        Title: () => <span>Lists</span>,
        Component: React.lazy(() => import("./sections/Lists")),
      },
      {
        key: "misc",
        path: `/misc`,
        Title: () => <span>Misc</span>,
        Component: React.lazy(() => import("./sections/Misc")),
      },
    ],
    []
  );

  // call hook
  const { activeTab, renderNavItems, renderRoutes } = useRouterTabs({ routes });

  return (
    <BrowserRouter>
      <main role="main" className="px-4">
        <h2>
          <small className="text-primary">@certego/@certego/certego-ui</small>{" "}
          example components
        </h2>
        <hr />
        <Container fluid className="d-flex">
          <Col md={2}>
            <ContentSection className="p-0 bg-body shadow sticky-top">
              <Nav tabs vertical>
                {renderNavItems()}
              </Nav>
            </ContentSection>
          </Col>
          <Col md={8}>
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
      </main>
    </BrowserRouter>
  );
}
