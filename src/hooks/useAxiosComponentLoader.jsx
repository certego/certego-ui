import React from "react";
import useAxios from "axios-hooks";

import Loader from "../components/containers/Loader";

const noop = (x) => x;

function useAxiosComponentLoader(axiosOptions, modifier = noop) {
  const obj = React.useMemo(() => axiosOptions, [axiosOptions ]);

  // API
  const [{ data, loading, error, }, refetch] = useAxios(obj);

  // memo
  const MyLoader = React.useMemo(
      // eslint-disable-next-line func-names
    () => function(props) {
  return <Loader loading={loading} error={error} {...props} />;
},
    [loading, error]
  );

  const modifiedData = React.useMemo(
    () => (data ? modifier(data) : []),
    [data, modifier]
  );

  return [modifiedData, MyLoader, refetch];
}

export default useAxiosComponentLoader;
