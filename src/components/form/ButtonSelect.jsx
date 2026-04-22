import React from "react";
import { ButtonGroup, Button } from "reactstrap";

function ButtonSelect({ choices, value, onChange, buttonProps = {}, ...rest }) {
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

export default React.memo(ButtonSelect);
