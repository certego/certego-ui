import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Row, Col, Nav } from "reactstrap";

import useRouterTabs from "./useRouterTabs";

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
  const { routes, className, overflow, redirect, children, ...rest } = props;

  const navClasses = classnames("nav-tabs", className, {
    "mw-fit-content": !overflow,
  });

  // call hook
  const { renderNavItems, renderRoutes, } = useRouterTabs({
    routes,
    redirect,
  });

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
          {children}
        </Col>
      </Row>
      <div className="mt-3">{renderRoutes()}</div>
    </>
  );
}

RouterTabs.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.search,
      }).isRequired,
      Title: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
      Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        .isRequired,
    })
  ).isRequired,
  redirect: PropTypes.bool,
  overflow: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

RouterTabs.defaultProps = {
  redirect: true,
  overflow: false,
  className: undefined,
  children: null,
};

export default RouterTabs;
