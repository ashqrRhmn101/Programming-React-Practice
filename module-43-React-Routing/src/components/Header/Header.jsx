import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>This is Header</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobile">Mobile</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>

        {/* <a href="/">Home</a>
                <a href="/mobile">Mobile</a>
                <a href="/laptops">Laptops</a>
                <a href=""></a> */}
      </nav>
    </div>
  );
};

export default Header;
