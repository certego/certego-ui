import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Sector, Legend } from "recharts";

import { useAxiosComponentLoader } from "../../hooks";
import { useTimePickerStore } from "../../stores";

// constants
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#fff">
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
      >{`${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#fff"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

// Component
export default function PieChartWidget({
  url,
  modifierFn,
  composedChartProps,
}) {
  // consume zustand store
  const { range, } = useTimePickerStore();

  // state
  const [activeIndex, setActiveIndex] = React.useState(0);

  // callbacks
  const onPieEnter = React.useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  // API
  const [chartData, Loader] = useAxiosComponentLoader(
    {
      url,
      params: {
        range,
      },
    },
    modifierFn
  );

  return (
    <Loader
      render={() => (
        <ResponsiveContainer height={280} width="100%">
          {chartData?.length ? (
            <PieChart {...composedChartProps}>
              <Pie
                label
                innerRadius={60}
                outerRadius={70}
                nameKey="name"
                dataKey="value"
                data={chartData}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={onPieEnter}
              />
              <Legend verticalAlign="top" height={80} />
            </PieChart>
          ) : (
            <h6 className="center text-muted">
              No data in the selected range.
            </h6>
          )}
        </ResponsiveContainer>
      )}
    />
  );
}

PieChartWidget.propTypes = {
  url: PropTypes.string.isRequired,
  modifierFn: PropTypes.func.isRequired,
  composedChartProps: PropTypes.object,
};

PieChartWidget.defaultProps = {
  composedChartProps: undefined,
};
