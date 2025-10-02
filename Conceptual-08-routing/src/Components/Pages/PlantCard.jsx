import React from "react";
import { Link, useNavigate } from "react-router";

const PlantCard = ({ plant }) => {
  //   console.log(plant);/
  const { image, name, description,id } = plant;

  const navigate = useNavigate()

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
          {/* <Link state={plant} to={`/plant-details/${id}`} className="btn btn-primary">Show Details</Link> */}
          <button onClick={() => navigate(`/plant-details/${id}`, {state: plant})} state={plant} to={`/plant-details/${id}`} className="btn btn-primary">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
