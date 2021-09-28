import React from "react";
import { Collapse, Container } from "reactstrap";

import { ContentSection, ArrowToggleIcon } from "@certego/certego-ui";

export default function ComponentAsExample(props) {
  // props
  const { name, bodyNode, ...restProps } = props;

  const id = `${name}-example`;

  // local state
  const [isExpanded, setIsExpanded] = React.useState(true);

  const toggle = () => setIsExpanded((s) => !s);

  return (
    <ContentSection className="bg-body" {...restProps}>
      <h4
        id={id}
        onClick={toggle}
        className="pt-2 pb-3 pointer border-bottom border-dark"
      >
        <mark className="text-primary">{name}</mark>
      </h4>
      {!isExpanded && (
        <div className="center" onClick={toggle}>
          <ArrowToggleIcon isExpanded={isExpanded} />
        </div>
      )}
      <Collapse toggler={`#${id}`} isOpen={isExpanded}>
        <Container>{bodyNode}</Container>
      </Collapse>
    </ContentSection>
  );
}
