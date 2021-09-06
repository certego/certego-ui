import React from "react";
import { matchSorter } from "match-sorter";
import { useAsyncDebounce } from "react-table";

/**
 * React hook for fuzzy searching text among list of objects. Uses `match-sorter`.
 */
export default function useFuzzySearch({ dataList, searchableKeys }) {
  // state
  const [items, setItems] = React.useState(dataList);
  const [searchInput, setSearchInput] = React.useState("");

  // debounced callback
  const debouncedSearch = useAsyncDebounce(
    () =>
      setItems(() =>
        searchInput
          ? // matched items
            matchSorter(dataList, searchInput, {
              keys: searchableKeys,
            })
          : // reset items list
            dataList,
      ),
    500,
  );

  // input callback
  const onInputChange = React.useCallback(
    (e) => {
      setSearchInput(e.target.value);
      debouncedSearch();
    },
    [debouncedSearch, setSearchInput],
  );

  return [searchInput, onInputChange, items];
}
