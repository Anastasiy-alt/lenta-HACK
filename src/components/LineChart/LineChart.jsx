import React from "react";
import styles from "./lineChart.module.scss";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const LineChart = ({ chartData }) => {
  return <Line data={chartData} width="1620" height="447" />;
};
