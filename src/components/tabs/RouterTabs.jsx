import React from "react";
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
function RouterTabs({ routes, className = undefined, overflow = false, redirect = true, children = null, extraNavComponent = null, ...rest }) {
  // props

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

export default RouterTabs;
