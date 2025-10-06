import React from "react";
import useProducts from "../Hook/useProducts";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const parsIntId = parseInt(id);
  const { products, loading } = useProducts();

  const product = products.find((p) => p.id === parsIntId);
  //   console.log(product);

  if (loading) return <p>Loading......</p>;

  const { name, image, price, category } = product || {};

  const handleWishList = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) return alert("Already Added");

      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-2">
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{category}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button onClick={handleWishList} className="btn btn-primary">
              Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
