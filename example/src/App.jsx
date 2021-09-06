import React from "react";

import { ContentSection, IconAlert, IconButton } from "certego-ui";

const App = () => {
  return (
    <ContentSection>
      <IconAlert color="info">Certego-UI example</IconAlert>
      <IconButton
        id="iconbutton-example-1"
        title="Example Button #1"
        Icon={<span>Example Button</span>}
      />
    </ContentSection>
  );
};

export default App;
