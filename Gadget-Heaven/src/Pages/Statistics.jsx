import React from "react";
import { useLoaderData } from "react-router";
import { Bar, BarChart, Legend, XAxis, YAxis } from "recharts";
import HeroSection from "./HeroSection";

const Statistics = () => {
  const product = useLoaderData();
  console.log(product);

  return (
    <div className="">
      <HeroSection title="Statistics"/>
      <h2 className="text-xl font-bold">Statistics</h2>
      <div className="py-5">
        <BarChart width={930} height={250} data={product}>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="price" fill="#9538E2" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
