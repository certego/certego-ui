import React from "react";
import useAxios from "axios-hooks";

import LoadingBoundary from "../containers/LoadingBoundary";

import DataTable from "./DataTable";
import useQueryParamsTable from "./useQueryParamsTable";

const pageParams = {
  page_size: 10,
  page: 1,
};
const defaultModifier = (d) => d?.results || [];

function useDataTable(
  { url, params: defaultParams, initialParams, },
  toPassTableProps,
  modifier = defaultModifier
) {
  // hook
  const [params, tableInitialState, tableStateReducer] = useQueryParamsTable({
    initialParams,
  });

  // state
  const [initialLoading, setInitialLoading] = React.useState(true);

  // API
  const [{ data, loading, error, }, refetch] = useAxios({
    url,
    params: { ...pageParams, ...defaultParams, ...params, },
  });

  // side-effects
  // initial table loading (spinner)
  React.useEffect(() => {
    if (!loading) setInitialLoading(false);
  }, [loading]);
  // https://it.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

  // https://it.reactjs.org/docs/hooks-reference.html#usememo
  const tableNode = React.useMemo(
    () => (
      <LoadingBoundary
        loading={initialLoading}
        error={error}
        render={() => (
          <DataTable
            data={data ? modifier(data) : []}
            pageCount={data?.total_pages || 1}
            stateReducer={tableStateReducer}
            initialState={tableInitialState}
            manualPagination
            manualFilters
            manualSortBy
            customProps={{ refetchTableData: refetch, }}
            {...toPassTableProps}
          />
        )}
      />
    ),
    [
      data,
      modifier,
      initialLoading,
      error,
      tableInitialState,
      tableStateReducer,
      refetch,
      toPassTableProps,
    ]
  );

  return [data, tableNode, refetch, tableStateReducer, loading];
}

export default useDataTable;
