// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams,  useLocation  } from "react-router";
// import { use, useContext, useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router";
import { CartContext } from "../../Provider/CartContext";

const PlantDetails = () => {
  const { setCart } = useContext(CartContext);

  // const handleClick = (data) => {
  //   setCart(prv => [...prv,data]);
  // };
  // console.log(cart);
  //   const { id } = useParams();
  //   console.log(id);

  //   const [plants, setPlants] = useState([]);
  //   useEffect(() => {
  //     // fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
  //     //   .then((res) => res.json())
  //     //   .then((data) => setPlants(data?.plants));
  //     axios(`https://openapi.programming-hero.com/api/plant/${id}`).then(data => setPlants(data.data.plants))
  //   }, [id]);

  const location = useLocation();
  // console.log(location)

  // const {data} = useLoaderData()
  // //   console.log(data.plants);

  // const { image, name, description, category, price } = data.plants;
  const { image, name, description, category, price } = location?.state || {};
  return (
    <div className="container mx-auto max-w-[400px] py-5">
      {/* <h2>Cart:{cart.length}</h2> */}
      <h2 className="text-4xl text-green-500 font-bold py-6">Plants details</h2>
      <div className="card bg-base-100 shadow-sm p-2 border m-2">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="h-[250px] w-full overflow-hidden object-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold">
            Category: <span className="text-green-300">{category}</span>
          </h2>
          <h2 className="card-title">Name: {name}</h2>
          <p>{description}</p>
          <p className="font-semibold">Price: ${price}</p>
          <button
            onClick={() => setCart((prv) => [...prv, location?.state])}
            className="btn btn-outline btn-success"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
