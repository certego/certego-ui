import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { FormFeedback } from "reactstrap";
import { useField } from "formik";

export default function TextBoxInput(props) {
  const { className, ...restProps } = props;

  const [field, meta] = useField(restProps);

  return (
    <>
      <textarea
        id={`TextBoxInput__${field.name}`}
        className={classnames("form-control", className, {
          "is-invalid": !!meta.error,
        })}
        {...field}
      />
      <FormFeedback>{meta.error}</FormFeedback>
    </>
  );
}

TextBoxInput.propTypes = {
  className: PropTypes.string,
};

TextBoxInput.defaultProps = {
  className: null,
};
