import React from "react";
import { Spinner } from "reactstrap";

import ErrorAlert from "../alerts/ErrorAlert";

function LoadingBoundary({ loading = false, error = null, size = "md", render, renderError = ErrorAlert, }) {
  // this is required due to a bug in the axios-hooks library which
  // shows this string even if the request was successful
  let showError = false;
  if (error && error.response) {
      showError = true;
  }

  return (
    <>
      {loading && (
        <Spinner type="ripple" className={`d-block mx-auto my-5 spinner-border-${size}`} />
      )}
      {showError && renderError({ error, size, })}
      {!loading && !showError && render()}
    </>
  );
}

export default LoadingBoundary;
