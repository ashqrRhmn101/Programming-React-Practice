import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) {
      setWishlist(savedList);
    }
  }, []);
  return (
    <div>
      <h1>Wish List: {wishlist.length}</h1>
    </div>
  );
};

export default WishList;
