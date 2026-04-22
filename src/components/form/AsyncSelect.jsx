import React from "react";
import useAxios from "axios-hooks";
import { Button } from "reactstrap";
import { MdClear } from "react-icons/md";

import Select from "./Select";
import Loader from "../containers/Loader";

export default function AsyncSelect({
  url,
  selectorFn = (x) => x,
  mapFn = (x) => ({ label: x.id, value: x.id, }),
  onClear = undefined,
  ...selectProps
}) {
  // API
  const [{ data, loading, error, }] = useAxios(url);
  const choices = React.useMemo(
    () => (data ? selectorFn(data).map(mapFn) : []),
    [data, selectorFn, mapFn]
  );

  return (
    <Loader
      size="lg"
      loading={loading}
      error={error}
      render={() => (
        <>
          <Select choices={choices} {...selectProps} />
          {onClear && (
            <Button className="float-end btn-sm" onClick={onClear}>
              <MdClear />
            </Button>
          )}
        </>
      )}
    />
  );
}

