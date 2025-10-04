import React, { useContext } from "react";
import HeroSection from "./HeroSection";
import { CardContext } from "../Providers/CardContext";
import CartDashboard from "./CartDashboard";

const Dashboard = () => {
  const { cart } = useContext(CardContext);

  const totalPrice = cart.reduce((price, item) => price + item.price, 0);
  return (
    <div>
      <HeroSection title="Dashboard" />

      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="font-bold">Cart</h2>
          <div className="flex items-center gap-5">
            <h2 className="font-bold">Total Coast: {totalPrice.toFixed(2)}</h2>
            <button className="btn bg-[#9538E2] text-white rounded-3xl">
              Purchase
            </button>
          </div>
        </div>
        <div className="my-20">
          {cart.map((product) => (
            <CartDashboard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
