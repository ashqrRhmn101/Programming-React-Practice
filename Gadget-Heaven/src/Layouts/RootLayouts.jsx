import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Pages/Footer";
import { CardContext } from "../Providers/CardContext";

const RootLayouts = () => {
  const [cart, setCart] = useState([]);
//   console.log(cart)
  return (
    <div>
      <CardContext.Provider value={{cart, setCart}}>
        <NavBar />
        <div className="min-h-[calc(100vh-422px)]">
          <Outlet />
        </div>
        <Footer />
      </CardContext.Provider>
    </div>
  );
};

export default RootLayouts;
