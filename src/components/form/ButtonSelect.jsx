import React from "react";
import PropTypes from "prop-types";
import { ButtonGroup, Button } from "reactstrap";

function ButtonSelect(props) {
  const { choices, value, onChange, buttonProps, ...rest } = props;
  return (
    <ButtonGroup {...rest}>
      {choices.map((ch) => (
        <Button
          key={`btn-select-option-${ch}`}
          color={value === ch ? "secondary" : "tertiary"}
          onClick={() => onChange(ch)}
          outline={value !== ch}
          active={value === ch}
          {...buttonProps}
        >
          {ch}
        </Button>
      ))}
    </ButtonGroup>
  );
}

ButtonSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  choices: PropTypes.array.isRequired,
  buttonProps: PropTypes.object,
};

ButtonSelect.defaultProps = {
  buttonProps: {},
};

export default React.memo(ButtonSelect);
