import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { name, image, price, category, id } = product;
  return (
    <div className="card bg-base-100 shadow-sm p-2 hover:scale-105 transition ease-in-out">
      <figure className="h-48 overflow-hidden">
        <img className="w-full object-cover" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{category}</p>
        <p>Price: {price}</p>
        <div className="card-actions justify-end">
          <Link to={`/productDetails/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
