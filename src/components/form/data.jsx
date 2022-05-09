/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Badge, Input, FormGroup, Label } from "reactstrap";

import { components as rsComponents } from "react-select";

// constants
export const selectComponents = {
  Placeholder: (props) => (
    <rsComponents.Placeholder {...props}>
      {!props.selectProps.inputValue && (
        <span className="text-muted">
          {props.selectProps.isSearchable && props.selectProps.menuIsOpen
            ? props.selectProps.menuOpenPlaceholder
            : props.selectProps.placeholder}
        </span>
      )}
    </rsComponents.Placeholder>
  ),
  MultiValueLabel: ({ children, ...props }) => (
    <rsComponents.MultiValueLabel {...props}>
      {props.data?.labelDisplay ? props.data.labelDisplay : props.data.label}
    </rsComponents.MultiValueLabel>
  ),
  MultiValueRemove: () => null,
  Option: ({ children, ...props }) => (
    <div className="d-flex-center">
      <rsComponents.Option {...props}>
        {!props.selectProps.isMulti ? (
          children
        ) : (
          <FormGroup check>
            <Input
              inline
              readOnly
              type="checkbox"
              id={`${props.innerProps.id}-custominput`}
              disabled={props.isDisabled}
              checked={props.isSelected}
              value={props.value}
            />
            <Label check>
              {props.label}
            </Label>
          </FormGroup>
        )}
      </rsComponents.Option>
      {props.data?.labelOptionExtra && (
        <div className="me-3">{props.data.labelOptionExtra}</div>
      )}
    </div>
  ),
  ValueContainer: ({ children, ...props }) => (
    <rsComponents.ValueContainer {...props}>
      {children}
      {props.selectProps.isMulti && (
        <Badge className="ms-auto">
          {props.selectProps.value.length} / {props.selectProps.options.length}
        </Badge>
      )}
    </rsComponents.ValueContainer>
  ),
};

export const selectStyles = {
  input: (base) => ({
    ...base,
    color: "var(--light) !important",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--light) !important",
  }),
  control: (base, state) => ({
    ...base,
    borderRadius: "0.4rem",
    background: "var(--darker) !important",
    borderColor: "var(--dark) !important",
    boxShadow: state.isFocused
      ? "0 0 0 0.2rem var(--light-bluish-grey)"
      : "none",
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
  multiValueLabel: (base) => ({
    ...base,
    color: "var(--light) !important",
  }),
  multiValue: (base) => ({
    ...base,
    background: "var(--tertiary) !important",
  }),
  option: (base, state) => ({
    ...base,
    background: "var(--darker) !important",
    color: state.isSelected ? "var(--tertiary)" : "light",
    fontWeight: state.isSelected ? "bolder" : "normal",
    border: "none",
  }),
};
