import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

export default function Select(props) {
  const { choices, allowEmpty, emptyLabel, ...rest } = props;

  return (
    <Input
      type="select"
      id={`select-${rest.name}`}
      {...rest}
    >
      {allowEmpty && <option value="">{emptyLabel}</option>}
      {choices.map(({ label: text, value, }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </Input>
  );
}

Select.defaultProps = {
  allowEmpty: false,
  emptyLabel: "",
};

Select.propTypes = {
  choices: PropTypes.array.isRequired,
  allowEmpty: PropTypes.bool,
  emptyLabel: PropTypes.string,
};
