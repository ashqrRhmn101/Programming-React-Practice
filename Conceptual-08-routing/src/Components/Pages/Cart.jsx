import React, { useContext } from "react";
import { CartContext } from "../../Provider/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  //  console.log(cart)
  return (
    <div>
      <h2>This is card</h2>
      {cart.map((plant) => (
        <div key={plant.id}>
          <div className="card card-side bg-base-100 shadow-sm container mx-auto my-9 md:h-[200px]  md:w-[70%] px-2">
            <figure className="md:w-[50%] w-[40%]">
              <img
                src={plant.image} className="mx-auto object-cover"
                alt="Movie"
              />
            </figure>
            <div className="md:card-body pl-4 md:w-[50%] w-[60%]">
              <h2 className="card-title">{plant.name}</h2>
              <p>{plant.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <h2>{cart.name}</h2> */}
    </div>
  );
};

export default Cart;
