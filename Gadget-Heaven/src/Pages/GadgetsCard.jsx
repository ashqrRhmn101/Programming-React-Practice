import React from "react";
import { NavLink } from "react-router";

const GadgetsCard = ({ gadget }) => {
  // console.log(gadget)
  const { name, price,id } = gadget;

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <NavLink to={`/card-details/${id}`}><button className="btn btn-primary">View Details</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default GadgetsCard;
