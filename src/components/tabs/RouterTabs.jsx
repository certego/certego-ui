import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Nav } from "reactstrap";

import useRouterTabs from "./useRouterTabs";

/**
 * @example
 *
 * ```js
 * const routes = [
 * {
 *   key: "foo-component",
 *   location: "foo",
 *   Title: () => <h4>Foo</h4>,
 *   Component: React.lazy(() => import("./FooPage")),
 * }

 * ];
 * ```
 *
 */
function RouterTabs(props) {
  // props
  const { routes, className, overflow, redirect, children, extraNavComponent, ...rest } = props;

  const navClasses = classnames("nav-tabs", className);

  // call hook
  const { renderNavItems, renderRoutes, } = useRouterTabs({
    routes,
    redirect,
  });

  return (
    <>
      <Nav tabs className={navClasses} {...rest}>
        {renderNavItems()}
        {extraNavComponent}
      </Nav>
      <div className="mt-3">{renderRoutes()}</div>
    </>
  );
}

RouterTabs.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      Title: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
      Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        .isRequired,
    })
  ).isRequired,
  redirect: PropTypes.bool,
  overflow: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  extraNavComponent: PropTypes.node,
};

RouterTabs.defaultProps = {
  redirect: true,
  overflow: false,
  className: undefined,
  children: null,
  extraNavComponent: null,
};

export default RouterTabs;
