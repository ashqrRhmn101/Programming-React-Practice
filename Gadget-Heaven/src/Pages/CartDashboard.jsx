import React from "react";

const CartDashboard = ({ product }) => {
  // console.log(product)
  const { name, description, price } = product;
  return (
    <div className="container mx-auto pb-5">
      <div className="flex bg-white rounded-lg p-2 gap-5">
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt=""
            className="h-[100px]"
          />
        </div>
        <div>
          <h2>{name}</h2>
          <h2>{description}</h2>
          <h2>{price}</h2>
        </div>
        <div className="card-actions justify-end">
          <button className="bg-transparent">❌</button>
        </div>
      </div>
    </div>
  );
};

export default CartDashboard;
