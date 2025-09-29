import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
} from "recharts";

const resultData = [
  {
    id: 1,
    name: "Rahim",
    math: 85,
    english: 78,
    science: 90,
  },
  {
    id: 2,
    name: "Karim",
    math: 72,
    english: 81,
    science: 65,
  },
  {
    id: 3,
    name: "Sadia",
    math: 95,
    english: 88,
    science: 92,
  },
  {
    id: 4,
    name: "Nusrat",
    math: 68,
    english: 74,
    science: 70,
  },
  {
    id: 5,
    name: "Imran",
    math: 80,
    english: 69,
    science: 75,
  },
  {
    id: 6,
    name: "Mitu",
    math: 88,
    english: 92,
    science: 85,
  },
  {
    id: 7,
    name: "Hasan",
    math: 60,
    english: 55,
    science: 62,
  },
  {
    id: 8,
    name: "Joya",
    math: 78,
    english: 84,
    science: 80,
  },
  {
    id: 9,
    name: "Rafi",
    math: 92,
    english: 90,
    science: 96,
  },
  {
    id: 10,
    name: "Mim",
    math: 70,
    english: 73,
    science: 68,
  },
];

const ResultChart = () => {
  return (
    <div className="bg-blue-300 p-7">
      <LineChart width={700} height={300} data={resultData}>
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Line dataKey="math" />
        <Line dataKey="english" stroke="red" />
      </LineChart>

      {/* Bar Chart */}

      <BarChart width={700} height={300} data={resultData}>
        <XAxis dataKey={"name"} />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey={"math"} />
        <Bar dataKey={"english"} fill="green" />
        <Bar dataKey={"science"} fill="#8884d8" />
      </BarChart>

      {/*  */}
    </div>
  );
};

export default ResultChart;
