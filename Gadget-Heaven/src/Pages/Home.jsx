import React, { useState } from "react";
import HeroSection from "./HeroSection";
import { useLoaderData } from "react-router";
import GadgetsCard from "./GadgetsCard";
import CategoryFilter from "./CategoryFilter";
import heroImg from "../assets/heroImg.jpg";

const Home = () => {
  const gadgets = useLoaderData();

  const [filterCategory, setFilterCategory] = useState("All Product");

  const categories = [
    "All Product",
    ...new Set(gadgets.map((c) => c.category)),
  ];

  const handleClick = (category) => {
    setFilterCategory(category);
  };

  //    console.log(filterCategory)
  const filterGadgets =
    filterCategory === "All Product"
      ? gadgets
      : gadgets.filter((g) => g.category === filterCategory);

  return (
    <div className="container mx-auto rounded-2xl">
      <HeroSection 
      title={`Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories`}
      img={heroImg}
      />
      <div className="container mx-auto grid grid-cols-12 gap-5 mb-30 mt-60">
        <div className="grid col-span-2">
          <CategoryFilter categories={categories} handleClick={handleClick} />
        </div>
        <div className="grid grid-cols-3 col-span-10 gap-3">
          {filterGadgets.map((gadget) => (
            <GadgetsCard key={gadget.id} gadget={gadget} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
