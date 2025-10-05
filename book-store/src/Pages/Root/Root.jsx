import React from "react";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-290px)] mx-auto
       md:px-10">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
