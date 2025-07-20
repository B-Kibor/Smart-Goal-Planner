import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Reusable Chart component
function GoalProgressChart({ goals }) {
  // Format data for the chart
  const labels = goals.map((goal) => goal.name);
  const progressData = goals.map((goal) => goal.savedAmount); // corrected
  const targetData = goals.map((goal) => goal.targetAmount);

  const data = {
    labels,
    datasets: [
      {
        label: "Current Savings",
        data: progressData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Target Savings",
        data: targetData,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Goal Progress Overview" },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 100 },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default GoalProgressChart;

