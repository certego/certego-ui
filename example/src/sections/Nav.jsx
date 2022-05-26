import React from "react";
import { DropdownMenu, DropdownToggle } from "reactstrap";

import {
  ContentSection,
  HoverDropdown,
  DropdownNavLink,
  NavLink,
} from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

export default function Nav(props) {
  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="HoverDropdown"
        bodyNode={
          <HoverDropdown className="text-center">
            <DropdownToggle>Hover here</DropdownToggle>
            <DropdownMenu className="bg-dark">
              <DropdownNavLink to="#">
                Item #1
              </DropdownNavLink>
              <DropdownNavLink to="#">
                Item #2
              </DropdownNavLink>
              <DropdownNavLink to="#">
                Item #3
              </DropdownNavLink>
            </DropdownMenu>
          </HoverDropdown>
        }
      />
      <ComponentAsExample
        name="DropdownNavLink"
        bodyNode={
          <div>
            As shown in <mark>HoverDropdown</mark>.
          </div>
        }
      />
      <ComponentAsExample
        name="NavLink"
        bodyNode={
          <div className="d-flex justify-content-around">
            <NavLink type="default" to="#">
              Link #1
            </NavLink>
            <NavLink type="primary" to="#">
              Link #2
            </NavLink>
            <NavLink type="primaryUl" to="#">
              Link #3
            </NavLink>
            <NavLink type="muted" to="#">
              Link #4
            </NavLink>
            <NavLink type="mutedUl" to="#">
              Link #5
            </NavLink>
          </div>
        }
      />
    </ContentSection>
  );
}
