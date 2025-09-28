import React, { useState } from "react";

const BottlesCard = ({
  bottle,
  // buyCount,
  // setBuyCount,
  handleAddToCart,
}) => {
  const { img, name, ratings, stock: stockValue, price } = bottle;
  // console.log(bottle)
  //   const handleBuy = (prsBottle) => {
  //     // console.log(prsBottle)
  //     const countBottle = [...buyCount, prsBottle];
  //     setBuyCount(countBottle);
  //   };
  const [removeStock, setRemoveStock] = useState(stockValue);
  console.log(removeStock);
  const handleClick = () => {
    if (removeStock > 0) {
      handleAddToCart(bottle);
      setRemoveStock(removeStock - 1);
    }
  };
  return (
    <div className="border p-2 container mx-auto rounded-lg ">
      <div>
        <img
          src={img}
          alt=""
          className="h-[200px] w-[100%] mx-auto rounded-lg bg-cover"
        />
      </div>
      <div>
        <h1 className="font-semibold">Name : {name}</h1>
        <p>Ratings : {ratings}</p>
        <p>
          Stock :{" "}
          {removeStock > 0 ? (
            removeStock
          ) : (
            <span className="text-red-500 font-semibold">Out of stock</span>
          )}
        </p>
        <p>Price : {price}</p>
        <button
          onClick={() => handleClick(bottle)}
          className="border  p-1 rounded-lg bg-green-400 font-semibold text-white cursor-pointer hover:bg-green-700"
        >
          {removeStock > 0 ? (
            "Buy Now"
          ) : (
            <span className="text-red-400 cursor-not-allowed">Sold Out</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default BottlesCard;
