import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FormFeedback } from "reactstrap";
import { CustomInput as FormCustomInput } from "formstrap";

function InputCheckBox(props) {
  // props
  const { label, name, valid, feedback, ...rest } = props;

  return (
    <>
      <FormCustomInput
        type="checkbox"
        withFeedback={false}
        label={label}
        name={name}
        className={classnames(
          "form-control form-control-sm bg-dark border-0 d-flex-start-center",
          `is-${valid ? "valid" : "invalid"}`
        )}
        valid={valid}
        {...rest}
      />
      {feedback && <FormFeedback valid={false}>{feedback}</FormFeedback>}
    </>
  );
}

InputCheckBox.propTypes = {
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  feedback: PropTypes.string,
};

InputCheckBox.defaultProps = {
  valid: true,
  feedback: null,
};

export default InputCheckBox;
