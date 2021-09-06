/* eslint-disable */
import React from "react";
import classnames from "classnames";
import { CustomInput } from "reactstrap";

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, setFilter, id } }) {
  // Set undefined to remove the filter entirely
  const onChange = (e) => setFilter(e.target.value || undefined);

  return (
    <CustomInput
      id={`table-select-${id}`}
      type="search"
      className={classnames(
        {
          "bg-body border-secondary": filterValue,
        },
        "form-control form-control-sm",
      )}
      value={filterValue || ""}
      onChange={onChange}
      placeholder="Search records.."
    />
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      const value = row.values[id];
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((v) => options.add(v));
        } else {
          options.add(value);
        }
      }
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Set undefined to remove the filter entirely
  const onChange = (e) => setFilter(e.target.value || undefined);

  // Render a multi-select box
  return (
    <CustomInput
      id={`table-select-${id}`}
      type="select"
      className="custom-select-sm"
      value={filterValue}
      onChange={onChange}
    >
      <option value="">All</option>
      {options.map((value, i) => (
        <option key={i} value={value}>
          {value}
        </option>
      ))}
    </CustomInput>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectOptionsFilter({
  column: { filterValue, setFilter, id, selectOptions },
}) {
  const onChange = (e) => setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely

  // Render a multi-select box
  return (
    <CustomInput
      id={`table-select-${id}`}
      type="select"
      className={classnames(
        {
          "bg-body border-secondary": filterValue,
        },
        "custom-select-sm",
      )}
      value={filterValue}
      onChange={onChange}
    >
      <option value="">All</option>
      {selectOptions.map((value, i) => (
        <option key={i} value={value}>
          {value}
        </option>
      ))}
    </CustomInput>
  );
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const [min, max] = [0, 100];
  const value = filterValue || min;

  return (
    <div className="mx-auto text-center">
      <div className="text-info">{`>=${value}`}</div>
      <CustomInput
        id={`table-select-${id}`}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setFilter(parseInt(e.target.value, 10))}
      />
    </div>
  );
}

export {
  DefaultColumnFilter,
  SelectOptionsFilter,
  SelectColumnFilter,
  SliderColumnFilter,
};
