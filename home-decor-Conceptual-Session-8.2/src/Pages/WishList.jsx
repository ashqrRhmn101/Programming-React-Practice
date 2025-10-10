import React, { useEffect, useState } from "react";
import WishLIstCard from "./WishLIstCard";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) {
      setWishlist(savedList);
    }
  }, []);

  const handleSort = (type) => {
    setSortOrder(type);
    if (type === "price-asc") {
      const sortLessPrice = [...wishlist].sort((a, b) => a.price - b.price);
      setWishlist(sortLessPrice);
    }
    if (type === "price-desc") {
      const sortHighPrice = [...wishlist].sort((a, b) => b.price - a.price);
      setWishlist(sortHighPrice);
    } else if (type === "none") {
      return wishlist;
    }
  };

  //  Handle Remove
  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = existingList.filter((p) => p.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  // // Chart Generate Data
  const totalByCategory = {};
  wishlist.forEach((p) => {
    const category = p.category;
    totalByCategory[category] = (totalByCategory[category] || 0) + p.price;
  });

  const chartData = Object.keys(totalByCategory).map((category) => ({
    category,
    total: totalByCategory[category],
  }));
  // console.log(chartData)

  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h1 className="text-xl">
          Wish List:{" "}
          <span className="text-sm">( {wishlist.length}) Products Found</span>
        </h1>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort : {sortOrder ? sortOrder : ""}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("none")}>Sort by price</a>
            </li>
            <li>
              <a onClick={() => handleSort("price-asc")}>Low-&gt;High</a>
            </li>
            <li>
              <a onClick={() => handleSort("price-desc")}>High-&gt;Low</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {wishlist.map((product) => (
          <WishLIstCard
            key={product.id}
            product={product}
            handleRemove={handleRemove}
          />
        ))}
      </div>

      {/* BarChart */}
      <BarChart width={730} height={250} data={chartData}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default WishList;
