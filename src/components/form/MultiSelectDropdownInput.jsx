import React from "react";
import ReactSelect from "react-select";

import { selectComponents, selectStyles } from "./data";

export default function MultiSelectDropdownInput(props) {
  return (
    <ReactSelect
      isMulti
      isSearchable
      isClearable
      closeMenuOnSelect={false}
      closeMenuOnScroll={false}
      hideSelectedOptions={false}
      components={selectComponents}
      styles={selectStyles}
      placeholder="Select.."
      menuOpenPlaceholder="Search.."
      {...props}
    />
  );
}

MultiSelectDropdownInput.propTypes = ReactSelect.propTypes;
