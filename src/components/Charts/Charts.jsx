import React from "react";
import "./Charts.css";
import ChartBar from "./ChartBar";

const Charts = (props) => {
    const dataPointMaxValues = props.dataPoints.map(dataPoints => dataPoints.value)
    const totalMax = Math.max(...dataPointMaxValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};
export default Charts;
