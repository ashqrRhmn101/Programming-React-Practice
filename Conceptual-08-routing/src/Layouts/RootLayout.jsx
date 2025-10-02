import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import { CartContext } from "../Provider/CartContext";

const RootLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation.state);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <Navbar />
      <main className="min-h-[calc(100vh-345px)]">
        {navigation?.state === "loading" ? <LoadingSpinner /> : <Outlet />}
      </main>
      <Footer />
    </CartContext.Provider>
  );
};

export default RootLayout;
