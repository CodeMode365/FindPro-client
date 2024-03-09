"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      label: "New users",
      data: labels.map(() => Math.round(Math.random() * 2000)),
      backgroundColor: "#38bdf8 ", //sky 300
      borderColor: "#0ea5e9", //sky 500
    },
    {
      label: "Account Deletion",
      data: labels.map(() => Math.round(Math.random() * 1000)),
      backgroundColor: "#fb7185 ", //rose 300
      borderColor: "#f43f5e", //rose 500
    },
  ],
};

const UserStatChart = () => {
  return (
    <Card className="h-auto">
      <CardHeader>
        <CardTitle className="text-center text-lg">
          Growth in this year (2024)
        </CardTitle>
      </CardHeader>
      <Line options={options} data={data} style={{ width: "100%" }} />;
    </Card>
  );
};

export default UserStatChart;
