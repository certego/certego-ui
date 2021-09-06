import React from "react";
import PropTypes from "prop-types";
import { CustomInput } from "formstrap";

export default function Select(props) {
  const { choices, allowEmpty, emptyLabel, ...rest } = props;

  return (
    <CustomInput
      type="select"
      id={`select-${rest.name}`}
      withFeedback
      {...rest}
    >
      {allowEmpty && <option value="">{emptyLabel}</option>}
      {choices.map(({ label, value, }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </CustomInput>
  );
}

Select.defaultProps = {
  emptyLabel: "",
  allowEmpty: false,
};

Select.propTypes = {
  choices: PropTypes.array.isRequired,
  allowEmpty: PropTypes.bool,
  emptyLabel: PropTypes.string,
};
