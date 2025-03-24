/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Table } from "reactstrap";
// react-table doc: https://react-table-v7-docs.netlify.app/
import { useTable, useMountedLayoutEffect } from "react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

import {
  makeTableArgs,
  defaultConfig,
  defaultInitialState,
  defaultColumn
} from "./utils";
import Paginator from "./Paginator";

/**
 * Suitable when data is already available client side. Thus, pagination/filtering/sorting can be performed client side too.
 */
function DataTable({
  config: userConfig,
  onSelectedRowChange,
  SubComponent,
  tableProps,
  tableEmptyNode,
  TableBodyComponent,
  ...rest
}) {
  // merge user specified config with default config
  const config = React.useMemo(
    () => ({ ...defaultConfig, ...userConfig, }),
    [userConfig]
  );

  const tableArgs = React.useMemo(() => makeTableArgs(config), [config]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    visibleColumns,
    page,
    gotoPage,
    pageOptions,
    selectedFlatRows,
    state: { pageIndex, },
  } = useTable(
    {
      defaultColumn,
      initialState: defaultInitialState,
      autoResetPage: false,
      autoResetExpanded: false,
      autoResetGroupBy: false,
      // autoResetSelectedRows: false,
      autoResetSortBy: false,
      autoResetFilters: false,
      autoResetRowState: false,
      ...rest,
    },
    ...tableArgs
  );

  useMountedLayoutEffect(() => {
    if (onSelectedRowChange) {
      if (selectedFlatRows?.length) {
        const originalRows = selectedFlatRows.map((r) => r.original);
        onSelectedRowChange(originalRows);
      } else {
        onSelectedRowChange([]);
      }
    }
  }, [onSelectedRowChange, selectedFlatRows]);

  const footerAvailable = footerGroups[0]?.headers.filter(h => h.Footer.length).length !== 0;

  // Use the state and functions returned from useTable to build your UI
  return (
    <div>
      <Table striped hover responsive="xl" {...getTableProps(tableProps)}>
        {/* Table Head */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className="head-row" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className={column.isSorted ? "text-primary" : ""}
                  {...column.getHeaderProps()}
                >
                  <div
                    className="text-center"
                    {...(column.canSort ? column.getSortByToggleProps() : {})}
                  >
                    {column.render("Header")}
                    {column.canSort &&
                      (column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaSortDown />
                        ) : (
                          <FaSortUp />
                        )
                      ) : (
                        <FaSort className="text-muted small" />
                      ))}
                  </div>
                  <div className="d-flex mt-1">
                    {column.canFilter && column.render("Filter")}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Table Body */}
        <tbody {...getTableBodyProps()}>
          {page?.length ? (
            !TableBodyComponent ? (
              page.map((row) => {
                prepareRow(row);
                const { key, ...rowProps } = row.getRowProps();
                return (
                  <React.Fragment key={key}>
                    {/* table row */}
                    <tr
                      {...rowProps}
                      className={classnames(rowProps.className, {
                        "row-selected": row.isSelected,
                      })}
                    >
                      {row.cells.map((cell) => (
                        <td className="text-center" {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                    {/* SubComponent */}
                    {SubComponent && config?.enableExpanded && row?.isExpanded && (
                      <tr>
                        <td colSpan={visibleColumns.length}>
                          <SubComponent row={row} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <TableBodyComponent page={page} />
            )
          ) : (
            <tr>
              <td
                colSpan={visibleColumns.length}
                className="text-large fw-bold text-center"
              >
                {tableEmptyNode}
              </td>
            </tr>
          )}
        </tbody>
        {/* Table Footer */}
        {footerAvailable &&
        <tfoot>
          {footerGroups.map(group => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map(column => (
                <th {...column.getFooterProps()}>{column.render("Footer")}</th>
              ))}
            </tr>
          ))}
        </tfoot>
        }
      </Table>
    {/* Paginator */}
    {pageOptions.length > 1 && (
      <Paginator
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        onPaginate={gotoPage}
        className="table-paginator"
      />
    )}
    </div>
  );
}

DataTable.propTypes = {
  config: PropTypes.object,
  onSelectedRowChange: PropTypes.func,
  SubComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.elementType]),
  tableProps: PropTypes.object,
  tableEmptyNode: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  TableBodyComponent: PropTypes.func,
};

DataTable.defaultProps = {
  config: defaultConfig,
  onSelectedRowChange: undefined,
  SubComponent: undefined,
  tableProps: undefined,
  tableEmptyNode: "No Data",
  TableBodyComponent: undefined,
};

export default DataTable;
