import React from "react";

import ReactJson from "@microlink/react-json-view";

function NewJsonRenderer({ jsonData = null, ...rest }) {
  return (
      <ReactJson
        name={null}
        theme="harmonic"
        src={jsonData}
        displayObjectSize={false}
        displayDataTypes={false}
        {...rest}

    />
  );
}

export default React.memo(NewJsonRenderer);
