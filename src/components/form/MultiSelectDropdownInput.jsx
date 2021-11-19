/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import ReactSelect, { components as rsComponents } from "react-select";
import { Badge, CustomInput } from "reactstrap";

// constants
const components = {
  Placeholder: () => null,
  MultiValueContainer: () => null,
  Option: (props) => (
    <rsComponents.Option {...props}>
      <CustomInput
        inline
        id={`multiselectdropdowninput__${props.label}`}
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null}
        label={props.label}
      />
    </rsComponents.Option>
  ),
  ValueContainer: ({ children, ...props }) => (
    <rsComponents.ValueContainer {...props}>
      {!props.selectProps.inputValue && (
        <span className="text-muted">
          {props.selectProps.isSearchable && props.selectProps.menuIsOpen
            ? "Search..."
            : props.selectProps.placeholder}
        </span>
      )}
      <Badge className="ml-auto">
        {props.selectProps.value.length} / {props.selectProps.options.length}
      </Badge>
      {children}
    </rsComponents.ValueContainer>
  ),
};
const styles = {
  control: (base) => ({
    ...base,
    background: "var(--darker) !important",
    borderColor: "var(--dark) !important",
  }),
  menu: (base) => ({
    ...base,
    opacity: 1,
    zIndex: 9999,
    background: "var(--darker)",
    border: "1px solid var(--dark)",
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
    overflowX: "hidden",
  }),
  option: (base) => ({
    ...base,
    background: "var(--darker) !important",
    border: "none",
  }),
};

export default function MultiSelectDropdownInput(props) {
  const { defaultElements, options, onElementsChange, ...toPassProps } = props;

  const [inputList, setInputList] = React.useState(() => defaultElements || []);

  const onChange = React.useCallback((v) => setInputList(v), [setInputList]);

  // fire onElementsChange to sync inputList with elements
  React.useEffect(() => {
    onElementsChange(inputList.map((el) => el.value));
  }, [inputList]);

  return (
    <ReactSelect
      isMulti
      isSearchable
      isClearable
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={components}
      styles={styles}
      value={inputList}
      onChange={onChange}
      placeholder="Select.."
      options={options}
      {...toPassProps}
    />
  );
}

MultiSelectDropdownInput.propTypes = {
  defaultElements: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onElementsChange: PropTypes.func.isRequired,
};
