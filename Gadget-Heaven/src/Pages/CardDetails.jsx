import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import HeroSection from "./HeroSection";
import { Heart, ShoppingCart } from "lucide-react";
import { CardContext } from "../Providers/CardContext";
import { toast, ToastContainer } from "react-toastify";

const CardDetails = () => {
  const products = useLoaderData();
  // console.log(products)
  const { setCart } = useContext(CardContext);
  const { image, name, price, stock, description, specification, rating } =
    products;

  const handleClick = (products) => {
    toast(
      <div role="alert" className="flex gap-2 text-green-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-semibold">Add To Card!</span>
      </div>
    );
    setCart((prv) => [...prv, products]);
  };
  return (
    <div className="mb-96">
       <ToastContainer position="top-right" autoClose={3000} />

      <HeroSection
        title="Product Details"
        cart={
          <div className="container mx-auto py-10">
            <div className="card card-side bg-base-100 shadow-sm h-[500px] w-[900px] mx-auto mb-10">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions">
                  <button className="btn bg-green-50 text-green-300 rounded-3xl">
                    {stock}
                  </button>
                </div>
                <p>{description}</p>
                <h1 className="font-bold">Specification:</h1>
                <ol className="list-decimal list-inside text-left space-y-2">
                  {specification.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <h2 className="font-bold">Rating ⭐</h2>
                <h2>
                  ⭐⭐⭐⭐ <button className="btn rounded-3xl">{rating}</button>
                </h2>

                <div className="card-actions">
                  <button
                    onClick={() => {
                      handleClick(products);
                    }}
                    className="btn bg-[#9538E2] text-white font-semibold rounded-3xl"
                  >
                    Add To Card <ShoppingCart />
                  </button>
                  <button className="btn rounded-3xl">
                    <Heart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CardDetails;
