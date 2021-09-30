import React from "react";
import useAxios from "axios-hooks";

import LoadingBoundary from "../containers/LoadingBoundary";

import DataTable from "./DataTable";
import useQueryParamsTable from "./useQueryParamsTable";

const pageParams = {
  page_size: 10,
  page: 1,
};

function useDataTable(
  { url, params: defaultParams, initialParams, },
  toPassTableProps
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

  const tableNode = React.useMemo(
    () => (
      <LoadingBoundary
        loading={initialLoading}
        error={error}
        render={() => (
          <DataTable
            data={data?.results || []}
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
      initialLoading,
      error,
      tableInitialState,
      tableStateReducer,
      refetch,
      toPassTableProps,
    ]
  );

  return [data, tableNode, refetch];
}

export default useDataTable;
