import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  //   console.log(plant);/
  const { image, name, description,id } = plant;

  return (
    <div className="card bg-base-100 shadow-sm p-2 border m-2">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-[250px] w-full overflow-hidden object-center"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/plant-details/${id}`} className="btn btn-primary">Show Details</Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
