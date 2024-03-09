"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Users", "Profession", "Online", "Physical"],
  title: {
    display: true,
    text: "Chart.js Doughnut Chart",
  },
  datasets: [
    {
      label: "Stastics",
      data: [12, 19, 3, 5],
      backgroundColor: ["#34d399", "#38bdf8", "#fb7185", "#facc15"],
      borderWidth: 1,
    },
  ],
};

const StatChart = () => {
  return (
    <Card className="h-full w-full flex  flex-col items-center bg-indigo-50">
      <CardHeader>
        <CardTitle><span className="text-primary">Apps</span> Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Doughnut data={data} />
      </CardContent>
    </Card>
  );
};

export default StatChart;
