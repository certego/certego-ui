/*
Based on: https://codesandbox.io/embed/6brgz
*/

import React from "react";
import { NavLink, NavItem } from "reactstrap";
import { NavLink as RRNavLink, Route, useHistory } from "react-router-dom";

import FallbackLoading from "../misc/FallbackLoading";

// constants
const isSame = (loc1, loc2) =>
  loc1.pathname === loc2.pathname &&
  (loc2.search ? loc1.search === loc2.search : true);

// hook
export default function useRouterTabs({ routes, redirect, }) {
  const { location: hLocation, replace, } = useHistory();

  const activeKey = React.useMemo(() => {
    let key;
    if (routes.length) {
      // just loaded => try to find matching key
      const routeFound = routes.find((r) => isSame(hLocation, r.location));
      if (routeFound) {
        key = routeFound.key;
      }
      // no match && redirect=true => redirect to first one
      if (!key && redirect) {
        key = routes[0].key;
        replace(routes[0].location);
      }
    }
    return key;
  }, [hLocation, replace, routes, redirect]);

  /**
   * Renders the reactstrap `NavItem`s. Note that reactstrap's `NavLink`
   * component actually renders react-router-dom's `NavLink` component in order
   * to use the props that exist on react-router-dom's version, such as `to`
   * and `exact`.
   *
   * See <https://github.com/reactstrap/reactstrap/issues/1285#issuecomment-446592497>.
   */
  const renderNavItems = React.useCallback(
    () =>
      routes.map(({ key, Title, location, }) => (
        <NavItem key={`routertabs-${key}-navitem`}>
          <NavLink
            tag={RRNavLink}
            to={location}
            isActive={() => activeKey === key}
          >
            <Title />
          </NavLink>
        </NavItem>
      )),
    [activeKey, routes]
  );

  /**
   * Renders `Route` components.
   */
  const renderRoutes = React.useCallback(
    () =>
      routes.map(({ key, Component, location, }) => (
        <Route
          key={`routertabs-${key}-route`}
          location={location}
          path={location.pathname}
          exact={false}
        >
          {() =>
            activeKey === key && (
              <React.Suspense fallback={<FallbackLoading />}>
                <Component />
              </React.Suspense>
            )
          }
        </Route>
      )),
    [activeKey, routes]
  );

  return { activeKey, renderNavItems, renderRoutes, };
}
