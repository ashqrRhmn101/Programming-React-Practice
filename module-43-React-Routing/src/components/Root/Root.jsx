import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import "./Root.css";
import Loading from "../LoadingSpinner/Loading";

const Root = () => {
  const navigation = useNavigation();
  // console.log(navigation.state)
  return (
    <div>
      <Header />
      <div className="root">
        <SideBar></SideBar>
        {navigation?.state === "loading" ? <Loading /> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
