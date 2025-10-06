import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStored } from "../Utility/addToList";
import { addToWishListStored } from "../Utility/WishList";

const BookDetails = () => {
  const { id } = useParams();
  const parsBookId = parseInt(id);
  const data = useLoaderData();
  // console.log(typeof parsBookId, data)
  const singleBook = data.find((book) => book.bookId === parsBookId);
  // console.log(singleBook)
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  // HandleClick ()
  const handleClick = (id) => {
    addToStored(id);
  };
  const handleWishlistClick = (id) => {
    addToWishListStored(id);
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm my-8 gap-8 py-5">
      <figure className="h-[490px] bg-gray-100 md:w-[30%]">
        <img src={image} alt="Books" className="p-14 object-cover" />
      </figure>
      <div className="md:w-[50%] space-y-5">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <p>{category}</p>
        <p>
          <span className="font-bold">Review : </span>
          {review}
        </p>
        <div className="">
          <span className="font-bold text-black pr-10">Tag </span>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="text-green-400 font-semibold mr-8 pb-5"
            >
              #{tag}
            </button>
          ))}
          <div className="space-y-5 border-t-2 pt-5">
            <p>
              Number of page:{" "}
              <span className="ml-11 font-bold">{totalPages}</span>
            </p>
            <p>
              Publisher: <span className="ml-24 font-bold">{publisher}</span>
            </p>
            <p>
              Year of Publishing:{" "}
              <span className="ml-8 font-bold">{yearOfPublishing}</span>
            </p>
            <p>
              Rating: <span className="ml-30 font-bold">{rating}</span>{" "}
            </p>
          </div>
        </div>
        <div className="card-actions gap-5">
          <button onClick={() => handleClick(id)} className="btn">
            Read
          </button>
          <button
            onClick={() => handleWishlistClick(id)}
            className="btn bg-sky-500"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
