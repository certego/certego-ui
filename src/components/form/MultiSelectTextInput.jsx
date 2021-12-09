import React from "react";
import PropTypes from "prop-types";

import ReactCreatableSelect from "react-select/creatable";

import { selectStyles } from "./data";

// constants
const components = {
  DropdownIndicator: null,
};

export default function MultiSelectTextInput(props) {
  const { defaultElements, onElementsChange, ...toPassProps } = props;

  const [inputValue, setInputValue] = React.useState("");
  const [inputList, setInputList] = React.useState(() => defaultElements || []);

  const onChange = (v, _) => setInputList(v);
  const onInputChange = (v) => setInputValue(v);
  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setInputList((prevInputList) => [
          ...prevInputList,
          { label: inputValue, value: inputValue, },
        ]);
        setInputValue("");
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  // fire onElementsChange to sync inputList with elements
  React.useEffect(() => {
    onElementsChange(inputList.map((el) => el.value));
  }, [inputList]);

  return (
    <ReactCreatableSelect
      isClearable
      isMulti
      menuIsOpen={false}
      components={components}
      styles={selectStyles}
      value={inputList}
      inputValue={inputValue}
      onChange={onChange}
      onInputChange={onInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Type something and press enter..."
      {...toPassProps}
    />
  );
}

MultiSelectTextInput.propTypes = {
  defaultElements: PropTypes.arrayOf(PropTypes.string).isRequired,
  onElementsChange: PropTypes.func.isRequired,
};
