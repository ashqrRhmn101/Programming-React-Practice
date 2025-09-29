import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Services",
    path: "/services",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 6,
    name: "FAQ",
    path: "/faq",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  //   console.log(open)

  const link = navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between items-center p-5 shadow">
      <div className="flex gap-4 " onClick={() => setOpen(!open)}>
        {open ? <X className="md:hidden" /> : <Menu className="md:hidden" />}
        <ul className={`md:hidden absolute duration-1000 ${open ? 'top-20' : '-top-40'}`}>
            {link}
        </ul>
        <h1 className="hidden md:block text-xl font-bold">My Navar</h1>
      </div>
      <ul className="md:flex gap-5 hidden">
        {link}
      </ul>
      <button className="btn btn-active btn-success">Success</button>
    </nav>
  );
};

export default NavBar;
