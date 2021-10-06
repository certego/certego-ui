import {
  useSortBy,
  useFilters,
  usePagination,
  useColumnOrder,
  useFlexLayout
} from "react-table";

import { rowSelectHooks, rowExpandHooks } from "./hooks";

// gotta maintain the order of these plugins
function makeTableArgs(config) {
  const args = [useColumnOrder];
  if (config?.enableFlexLayout) args.push(useFlexLayout);
  if (config?.enableFilters) args.push(useFilters);
  if (config?.enableSortBy) args.push(useSortBy);
  if (config?.enableExpanded) args.push(...rowExpandHooks);
  args.push(usePagination);
  if (config?.enableSelection) args.push(...rowSelectHooks);
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
