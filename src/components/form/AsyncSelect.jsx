import React from "react";
import useAxios from "axios-hooks";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { MdClear } from "react-icons/md";

import Select from "./Select";
import Loader from "../containers/Loader";

export default function AsyncSelect(props) {
  const { url, selectorFn, mapFn, onClear, ...selectProps } = props;
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
            <Button className="float-end" size="sm" onClick={onClear}>
              <MdClear />
            </Button>
          )}
        </>
      )}
    />
  );
}

AsyncSelect.defaultProps = {
  selectorFn: (x) => x,
  mapFn: (x) => ({
    label: x.id,
    value: x.id,
  }),
  onClear: undefined,
};

AsyncSelect.propTypes = {
  url: PropTypes.string.isRequired,
  selectorFn: PropTypes.func,
  mapFn: PropTypes.func,
  onClear: PropTypes.func,
};
