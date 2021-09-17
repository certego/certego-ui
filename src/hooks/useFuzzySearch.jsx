import React from "react";
import { matchSorter } from "match-sorter";
import { useAsyncDebounce } from "react-table";

/**
 * React hook for fuzzy searching text among list of objects.
 * Uses `match-sorter` package.
 */
export default function useFuzzySearch({ dataList, searchableKeys, }) {
  // state
  const [items, setItems] = React.useState(dataList);
  const [searchInput, setSearchInput] = React.useState("");

  // filter function
  const updateItems = () =>
    setItems(() =>
      searchInput
        ? // matched items
          matchSorter(dataList, searchInput, {
            keys: searchableKeys,
          })
        : // reset items list
          dataList
    );

  // debounced callback
  const debouncedSearch = useAsyncDebounce(updateItems, 500);

  // input callback
  const onInputChange = React.useCallback(
    (e) => {
      setSearchInput(e.target.value);
      debouncedSearch();
    },
    [debouncedSearch, setSearchInput]
  );

  // side effect that updates item if input `dataList` is changed
  React.useEffect(() => {
    updateItems();
  }, [dataList]);

  return [searchInput, onInputChange, items];
}
