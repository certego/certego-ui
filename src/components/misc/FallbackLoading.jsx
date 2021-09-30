import React from "react";
import { Spinner } from "reactstrap";

export default function FallBackLoading(props) {
  return (
    <div className="vertical-center" {...props}>
      <div className="container text-center">
        <Spinner type="ripple" size="lg" />
        <h4 className="mt-4">Loading...</h4>
      </div>
    </div>
  );
}
