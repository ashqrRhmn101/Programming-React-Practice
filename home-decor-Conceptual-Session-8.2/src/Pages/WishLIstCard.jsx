import React from "react";

const WishLIstCard = ({ product, handleRemove }) => {
  //   console.log(product);
  const { name, image, price, category, id } = product;
  return (
    <div className="card card-side bg-base-100 shadow-sm mb-7">
      <figure className="h-[200px]">
        <img
          src={image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>{category}</p>
      </div>

      <button onClick={() => handleRemove(id)} className="btn btn-square btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default WishLIstCard;
