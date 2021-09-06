import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Row, Col, Nav, TabContent } from "reactstrap";
import { Switch, Redirect } from "react-router-dom";

import useRouterTabs from "./useRouterTabs";
import FallBackLoading from "../FallbackLoading";

/**
 * @example
 *
 * ```js
 * const routes = [
 * {
 *   key: "foo-component",
 *   path: "/foo",
 *   Title: () => <h4>Foo</h4>,
 *   Component: React.lazy(() => import("./FooPage")),
 * },
 * {
 *   key: "bar-component",
 *   path: "/bar",
 *   Title: () => <h4>Bar</h4>,
 *   Component: React.lazy(() => import("./BarPage")),
 * }

 * ];
 * ```
 *
 */
function RouterTabs(props) {
  // props
  const { routes, className, overflow, redirect, ...rest } = props;

  const navClasses = classnames("nav-tabs", className, {
    "mw-fit-content": !overflow,
  });

  // call hook
  const { activeTab, renderNavItems, renderRoutes, } = useRouterTabs({ routes, });

  return (
    <>
      <Row
        noGutters
        className="d-flex justify-content-between align-items-start flex-xl-row flex-lg-column"
      >
        <Col lg={12} xl={8}>
          <Nav tabs className={navClasses} {...rest}>
            {renderNavItems()}
          </Nav>
        </Col>
        <Col
          lg={12}
          xl={4}
          className="mt-xl-0 mt-sm-3 ml-sm-auto mw-fit-content"
        >
          {rest.children}
        </Col>
      </Row>
      <TabContent activeTab={activeTab}>
        <React.Suspense fallback={<FallBackLoading />}>
          <Switch>
            {renderRoutes()}
            {/* Redirects all unknown paths to first one in the list */}
            {redirect && <Redirect from="/" to={routes[0].path} />}
          </Switch>
        </React.Suspense>
      </TabContent>
    </>
  );
}

RouterTabs.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      Title: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
      Component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.element,
        PropTypes.elementType,
      ]).isRequired,
    })
  ).isRequired,
  overflow: PropTypes.bool,
  className: PropTypes.string,
  redirect: PropTypes.bool,
};

RouterTabs.defaultProps = {
  redirect: true,
  overflow: false,
  className: undefined,
};

export default RouterTabs;
