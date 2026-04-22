import React from "react";
import classnames from "classnames";
import { Input, FormGroup, FormFeedback, Label } from "reactstrap";

function InputCheckBox({ label, name, valid = true, feedback = null, ...rest }) {
  // props

  return (
    <FormGroup check>
      <Input
        type="checkbox"
        name={name}
        bsSize="sm"
        className={classnames(
          "bg-dark border-0 d-flex-start-center",
          `is-${valid ? "valid" : "invalid"}`
        )}
        valid={valid}
        {...rest}
      />
      <Label check>{label}</Label>
      {feedback && <FormFeedback>{feedback}</FormFeedback>}
    </FormGroup>
  );
}

export default InputCheckBox;
