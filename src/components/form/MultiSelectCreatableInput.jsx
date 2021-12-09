import React from "react";
import ReactSelectCreatable from "react-select/creatable";

import { selectComponents, selectStyles } from "./data";

export default function MultiSelectCreatableInput(props) {
  return (
    <ReactSelectCreatable
      isMulti
      isSearchable
      isClearable
      closeMenuOnSelect={false}
      closeMenuOnScroll={false}
      hideSelectedOptions={false}
      components={selectComponents}
      styles={selectStyles}
      placeholder="Select existing or type to create..."
      menuOpenPlaceholder="Select existing or type to create..."
      createOptionPosition="first"
      {...props}
    />
  );
}

MultiSelectCreatableInput.propTypes = ReactSelectCreatable.propTypes;
