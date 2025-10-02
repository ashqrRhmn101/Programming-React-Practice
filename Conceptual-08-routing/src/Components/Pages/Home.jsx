// import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import { useLoaderData } from "react-router";

const Home = () => {
  //   const [plants, setPlants] = useState([]);
  //   useEffect(() => {
  //     fetch("https://openapi.programming-hero.com/api/plants").then(res => res.json()).then(data => setPlants(data?.plants))
  //   },[])
  const { plants } = useLoaderData();
  //   console.log(plants);
  return (
    <div className="container mx-auto">
      <p className="py-8">Welcome Home Our Plants</p>
      <div className="grid md:grid-cols-3">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
