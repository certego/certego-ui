/* eslint-disable react/prop-types */
import React from "react";
import { CustomInput } from "reactstrap";
import {
  useSortBy,
  useFilters,
  useRowSelect,
  usePagination,
  useExpanded,
  useColumnOrder,
  useFlexLayout,
} from "react-table";

import ArrowToggleIcon from "../icons/ArrowToggleIcon";

const IndeterminateCheckbox = React.forwardRef(
  ({ id, indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      if (resolvedRef?.current)
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <CustomInput id={id} type="checkbox" innerRef={resolvedRef} {...rest} />
    );
  },
);

function insertCheckboxColumn(hooks) {
  hooks.visibleColumns.push((columns, { instance }) => [
    // Let's make a column for selection
    {
      id: "data-table-selection",
      width: 80,
      // The header can use the table's getToggleAllRowsSelectedProps method
      // to render a checkbox
      Header: ({
        selectedFlatRows,
        toggleAllPageRowsSelected,
        toggleRowSelected,
        rows,
      }) => {
        const selectableRows = React.useMemo(
          () => rows.filter((r) => instance?.isRowSelectable(r)),
          [rows],
        );
        const onChange = React.useCallback(
          (e) =>
            e.target.checked
              ? selectableRows.forEach((r) => toggleRowSelected(r.id, true))
              : toggleAllPageRowsSelected(false),
          [selectableRows, toggleAllPageRowsSelected, toggleRowSelected],
        );
        return selectableRows.length ? (
          <div
            className="d-flex flex-column"
            title="Toggle selection for all row objects you have ownership for"
          >
            <h6 className="text-muted">{selectedFlatRows.length} selected</h6>
            <IndeterminateCheckbox
              id="data-table-checkbox-header"
              indeterminate={
                selectedFlatRows.length > 0 &&
                selectableRows.length !== selectedFlatRows.length
              }
              checked={
                selectableRows.length > 0 &&
                selectableRows.length === selectedFlatRows.length
              }
              onChange={onChange}
            />
          </div>
        ) : null;
      },
      Cell: ({ row }) =>
        instance?.isRowSelectable(row) ? (
          <IndeterminateCheckbox
            id={`data-table-checkbox-${row.id}`}
            {...row.getToggleRowSelectedProps()}
          />
        ) : null,
    },
    ...columns,
  ]);
}

function insertExpandColumn(hooks) {
  hooks.visibleColumns.push((columns) => [
    // Let's make a column for expansion
    {
      Header: () => null, // No header
      id: "data-table-row-expansion", // It needs an ID
      width: 60,
      maxWidth: 60,
      Cell: ({ row }) => (
        // Use Cell to render an expander for each row.
        // We can use the getToggleRowExpandedProps prop-getter
        // to build the expander.
        <span {...row.getToggleRowExpandedProps()}>
          <ArrowToggleIcon isExpanded={!!row?.isExpanded} />
        </span>
      ),
    },
    ...columns,
  ]);
}

// gotta maintain the order of these plugins
function makeTableArgs(config) {
  const args = [useColumnOrder];
  if (config?.enableFlexLayout) args.push(useFlexLayout);
  if (config?.enableFilters) args.push(useFilters);
  if (config?.enableSortBy) args.push(useSortBy);
  if (config?.enableExpanded) args.push(useExpanded, insertExpandColumn);
  args.push(usePagination);
  if (config?.enableSelection) args.push(useRowSelect, insertCheckboxColumn);
  return [...args, ...config.customHooks];
}

const defaultConfig = {
  enableFlexLayout: true,
  enableExpanded: false,
  enableSortBy: true,
  enableFilters: true,
  enableSelection: false,
  customHooks: [],
};

const defaultInitialState = {
  pageIndex: 0,
  pageSize: 10,
  sortBy: [],
  selectedRowIds: {},
};

const defaultColumn = {
  // Let's set up our default Filter UI
  Filter: () => null,
};

export { makeTableArgs, defaultConfig, defaultInitialState, defaultColumn };
