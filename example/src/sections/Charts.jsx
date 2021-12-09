import React from "react";
import { Bar, Area } from "recharts";

import { ContentSection, CustomComposedChart } from "@certego/certego-ui";

import ComponentAsExample from "./ComponentAsExample";

// constants
const chartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const chartLabels = [
  ["uv", "#82ca9d"],
  ["pv", "#8884d8"],
  ["amt", "#abb000"],
];

// Example component
export default function Charts(props) {
  return (
    <ContentSection {...props}>
      <ComponentAsExample
        name="CustomComposedChart"
        bodyNode={
          <>
            <h6 className="text-gradient">SimpleBarChart</h6>
            <ContentSection className="bg-darker">
              <CustomComposedChart xAxisDataKey="name" data={chartData}>
                {chartLabels.slice(0, 2).map(([name, color]) => (
                  <Bar dataKey={name} fill={color} />
                ))}
              </CustomComposedChart>
            </ContentSection>
            <h6 className="text-gradient">StackedBarChart</h6>
            <ContentSection className="bg-darker">
              <CustomComposedChart xAxisDataKey="name" data={chartData}>
                {chartLabels.slice(0, 2).map(([name, color]) => (
                  <Bar stackId="a" dataKey={name} fill={color} />
                ))}
                {chartLabels.slice(2, 3).map(([name, color]) => (
                  <Bar dataKey={name} fill={color} />
                ))}
              </CustomComposedChart>
            </ContentSection>
            <h6 className="text-gradient">SimpleAreaChart</h6>
            <ContentSection className="bg-darker">
              <CustomComposedChart xAxisDataKey="name" data={chartData}>
                {chartLabels.slice(0, 2).map(([name, color]) => (
                  <Area
                    type="monotone"
                    stackId="b"
                    dataKey={name}
                    stroke={color}
                    fill={color}
                  />
                ))}
              </CustomComposedChart>
            </ContentSection>
          </>
        }
      />
      <ComponentAsExample
        name="AnyChartWidget"
        bodyNode={<small className="font-italic">todo</small>}
      />
      <ComponentAsExample
        name="PieChartWidget"
        bodyNode={<small className="font-italic">todo</small>}
      />
      <h6>
        See{" "}
        <a
          href="https://recharts.org/en-US/examples"
          target="_blank"
          rel="noreferrer"
          className="link-ul-primary"
        >
          Recharts examples
        </a>{" "}
        for more.
      </h6>
    </ContentSection>
  );
}
