import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import CustomComposedChart from "./CustomComposedChart";

import { useAxiosComponentLoader } from "../../hooks";
import { useTimePickerStore } from "../../stores";

export default function AnyChartWidget({
  url,
  accessorFnAggregation,
  componentsFn,
  composedChartProps,
}) {
  // consume zustand store
  const { range, dateFormat, } = useTimePickerStore();

  // API
  const [respData, Loader] = useAxiosComponentLoader({
    url,
    params: {
      range,
    },
  });

  // memo
  const chartData = React.useMemo(() => {
    const aggregation = accessorFnAggregation(respData);
    if (!aggregation || !aggregation?.length) return null;
    return aggregation
      .sort((a, b) => moment(a.date) - moment(b.date))
      .map((o) => ({
        ...o,
        date: moment(o.date).format(dateFormat),
      }));
  }, [accessorFnAggregation, dateFormat, respData]);

  const components = React.useMemo(
    () => componentsFn(respData),
    [respData, componentsFn]
  );

  return (
    <Loader
      render={() =>
        chartData?.length ? (
          <CustomComposedChart
            xAxisDataKey="date"
            data={chartData}
            {...composedChartProps}
          >
            {components}
          </CustomComposedChart>
        ) : (
          <h6 className="center text-muted">No data in the selected range.</h6>
        )
      }
    />
  );
}

AnyChartWidget.propTypes = {
  url: PropTypes.string.isRequired,
  accessorFnAggregation: PropTypes.func.isRequired,
  componentsFn: PropTypes.func.isRequired,
  composedChartProps: PropTypes.object,
};

AnyChartWidget.defaultProps = {
  composedChartProps: undefined,
};
