/*
Based on: https://codesandbox.io/embed/6brgz
*/

import React from "react";
import { NavLink, NavItem, TabPane } from "reactstrap";
import { NavLink as RouterNavLink, Route } from "react-router-dom";

function useRouterTabs({ routes, }) {
  const [activeTab, setActiveTab] = React.useState(routes[0].key);

  const isActive = React.useCallback(
    (tabKey) => {
      const isCurrentlyActive = activeTab === tabKey;
      // set new
      if (!isCurrentlyActive) setActiveTab(tabKey);
      return isCurrentlyActive;
    },
    [activeTab, setActiveTab]
  );

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
      routes.map(({ key, path, Title, }) => (
        <NavItem key={`routertabs-${key}-navitem`}>
          <NavLink
            tag={RouterNavLink}
            to={path}
            isActive={(match) => match && isActive(key)}
          >
            <Title />
          </NavLink>
        </NavItem>
      )),
    [routes, isActive]
  );

  /**
   * Renders `Route` components with their respective lazily loaded children
   * wrapped inside a `TabPane`.
   */
  const renderRoutes = React.useCallback(
    () =>
      routes.map(({ key, path, Component, }) => (
        <Route key={`routertabs-${key}-route`} path={path}>
          <TabPane tabId={key} className="pt-3">
            <Component />
          </TabPane>
        </Route>
      )),
    [routes]
  );

  return { activeTab, renderNavItems, renderRoutes, };
}

export default useRouterTabs;
