import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAsyncDebounce } from "react-table";

import {
  serializeFilterParams,
  deserializeFilterParams,
  serializeSortByParams,
  deserializeSortByParams
} from "./queryParamsUtils";

function useQueryParamsTable({ initialParams, columnNames, }) {
  // react-router
  const navigate = useNavigate();
  const location = useLocation();

  // state
  /*
    initialParams is used for 
    fallback values incase URL query params are empty
  */
  const [params, setParams] = React.useState(() => {
    const urlParams = Object.fromEntries(
      new URLSearchParams(location.search)
    );
    return Object.keys(urlParams).length ? urlParams : initialParams || {};
  });

  // memo
  const initialState = React.useMemo(() => {
    const { ordering, page, ...filters } = params;
    return {
      pageIndex: page ? parseInt(page - 1, 10) : 0,
      sortBy: ordering ? deserializeSortByParams(ordering) : "",
      filters: filters ? deserializeFilterParams(filters) : [],
    };
  }, [params]);

  // update query params to match table state
  React.useEffect(() => {
    const search = `?${new URLSearchParams(params).toString()}`;
    if (search !== location.search)
      navigate({ search, }, { replace: true, });
  }, [navigate, params, location.search]);

  // callbacks
  const onTableFilterDebounced = useAsyncDebounce(
    /* this function MUST updates ONLY the parameters used by the table: the columns.
    It has to maintain all the params used in the page outside the table.
    */
    (filters) => 
      
      setParams(({ ordering, ...others }) => ({  // we need to separate ordering, or this doesn't work 
            // Maintain the parameter
            ...Object.keys(others)
              .filter(param => !!columnNames.includes(param.id)) // select only parameter external to the table
              .reduce((savedParams, nextParam) => ({...savedParams, [nextParam[0]]: nextParam[1], }), {}), // concatenate them
            // Add ordering parameter (if it's defined)
            ...(ordering ? { ordering, } : {}), 
            // add the filter parameters (the ones with columns names)
            ...serializeFilterParams(filters.filter(filter => columnNames.includes(filter.id))),
          })),
    500
  ); // Debounce filter call for 500ms

  const onTableSortDebounced = useAsyncDebounce(
    (sortBy) =>
      sortBy?.length
        ? setParams(({ ordering, ...others }) => ({
            ...others,
            ordering: serializeSortByParams(sortBy),
          }))
        : setParams(({ ordering, ...others }) => others),
    500
  ); // Debounce sortBy call for 500ms

  const tableStateReducer = React.useCallback(
    (newState, action) => {
      switch (action.type) {
        case "gotoPage":
          setParams((currParams) => ({
            ...currParams,
            page: action.pageIndex + 1,
          }));
          break;
        case "setFilter":
          onTableFilterDebounced(newState.filters);
          break;
        case "toggleSortBy":
          onTableSortDebounced(newState.sortBy);
          break;
        default:
          break;
      }
      return newState;
    },
    [setParams, onTableFilterDebounced, onTableSortDebounced]
  );

  return [params, initialState, tableStateReducer];
}

export default useQueryParamsTable;
