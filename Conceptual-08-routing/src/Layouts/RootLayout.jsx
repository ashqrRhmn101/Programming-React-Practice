import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation.state);

  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-345px)]">
        {navigation?.state === "loading" ? <LoadingSpinner /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
