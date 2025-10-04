import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Nav.css";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../Provider/CartContext";

const Navbar = () => {
  const { cart } = use(CartContext);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="relative">
                <div>
                  <ShoppingCart />
                  <p className="absolute top-0 right-35">{cart.length}</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Ar.</a>

        <div>
          <NavLink to="/cart" className="relative mx-auto">
            <div className="md:hidden">
              <ShoppingCart />
              <p className="absolute -top-2 -right-4">{cart.length}</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="relative">
              <div>
                <ShoppingCart />
                <p className="absolute top-0 right-0">{cart.length}</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
