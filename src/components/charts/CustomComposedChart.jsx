import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function CustomComposedChart(props) {
  const { xAxisDataKey, data, children, containerProps, chartProps, } = props;

  return (
    <ResponsiveContainer width="100%" height={250} {...containerProps}>
      <ComposedChart
        width={600}
        height={250}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: -25,
          bottom: 0,
        }}
        {...chartProps}
      >
        <Legend verticalAlign="top" height={40} />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--darker)",
            border: 0,
            borderRadius: 5,
          }}
        />
        <CartesianGrid stroke="#25404b" strokeDasharray="1 1" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis allowDecimals={false} />
        {children}
      </ComposedChart>
    </ResponsiveContainer>
  );
}

CustomComposedChart.propTypes = {
  xAxisDataKey: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
  containerProps: PropTypes.object,
  chartProps: PropTypes.object,
};

CustomComposedChart.defaultProps = {
  containerProps: undefined,
  chartProps: undefined,
};

export default React.memo(CustomComposedChart);
