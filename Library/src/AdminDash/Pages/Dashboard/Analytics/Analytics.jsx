// Analytics.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from "./Analytics.module.css";
import Button from "../../../Defaults/Buttons/Button";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = ({ datasets = [], labels = [], title, onButtonClick }) => {
  // Ensure datasets is an array and not undefined
  const chartData = {
    labels,
    datasets: datasets.map((dataset, index) => ({
      label: dataset.label || `Dataset ${index + 1}`,
      data: dataset.data,
      borderColor: dataset.borderColor || "blue",
      fill: false,
    })),
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{title || "Analytics"}</h3>
        <Button variant="viewmore" onClick={onButtonClick}>
          View Analytics
        </Button>
      </div>
      {datasets.length > 0 ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Analytics;
