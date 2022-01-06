import React from "react";

import PropTypes from "prop-types";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

/**
 * @type {component}
 * @param props
 */
function Tabs(props) {
  const { tabTitles, renderables, defaultTab, overflow, className, ...rest } =
    props;

  const [activeTab, setActiveTab] = React.useState(defaultTab);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const navClasses = classnames("nav-tabs", className, {
    "mw-fit-content": !overflow,
  });

  return (
    <>
      <Nav tabs className={navClasses} {...rest}>
        {tabTitles.map((title, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <NavItem key={`tabs-navitem-${i}`}>
            <NavLink active={activeTab === i} onClick={() => toggle(i)}>
              {title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {renderables.map(
          (render, i) =>
            activeTab === i && (
              // eslint-disable-next-line react/no-array-index-key
              <TabPane key={`tabs-tabpane-${i}`} tabId={i} className="pt-3">
                {render()}
              </TabPane>
            )
        )}
      </TabContent>
    </>
  );
}

Tabs.defaultProps = {
  defaultTab: 0,
  overflow: false,
  className: undefined,
};

Tabs.propTypes = {
  tabTitles: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object])
  ).isRequired,
  renderables: PropTypes.arrayOf(PropTypes.func).isRequired,
  defaultTab: PropTypes.number,
  overflow: PropTypes.bool,
  className: PropTypes.string,
};

export default Tabs;
