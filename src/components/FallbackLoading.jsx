import React from "react";
import { Spinner } from "reactstrap";

function FallBackLoading() {
  return (
    <div className="vertical-center">
      <div className="container text-center">
        <Spinner type="ripple" size="lg" />
        <h4 className="mt-4">Loading...</h4>
      </div>
    </div>
  );
}

export default FallBackLoading;
