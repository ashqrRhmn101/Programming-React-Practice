import React from "react";
import { NavLink } from "react-router";

const CategoryFilter = ({ categories, handleClick }) => {
  // console.log(handleCategories)
  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
        {categories.map((category, index) => (
          // <button
          //   className="btn rounded-2xl"
          //   key={index}
          //   onClick={() => handleClick(category)}
          // >
          //   {category}
          // </button>
          <NavLink
            className="btn rounded-2xl font-bold"
            key={index}
            onClick={() => handleClick(category)}
          >
            <button>{category}</button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
