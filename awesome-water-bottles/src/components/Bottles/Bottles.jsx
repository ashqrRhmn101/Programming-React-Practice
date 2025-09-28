import React, { use, useState } from "react";
import BottlesCard from "../BottlesCard/BottlesCard";

const Bottles = ({ promiseBottles }) => {
  const bottles = use(promiseBottles);

  const [buyCount, setBuyCount] = useState([]);
  //   console.log(buyCount)

  const handleAddToCart = (bottle) => {
    const newCard = ([...buyCount, bottle])
    setBuyCount(newCard);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold pb-7">
        Bottles Store : {bottles.length}
      </h1>
      <h2 className="text-xl font-semibold pb-5">
        Buy Bottles : {buyCount.length}
      </h2>
      {
        // buyCount.map(item => <h2>Buy Bottles : <img src={item.img} alt="" /></h2>)
        // buyCount.map(item => <h2>{item.stock-1}</h2>)
      }
      

      <div className="grid grid-cols-4 gap-4">
        {bottles.map((bottle) => (
          <BottlesCard
            key={bottle.id}
            bottle={bottle}
            // buyCount={buyCount}
            // setBuyCount={setBuyCount}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;
