import React from "react";

const WishlistBooks = ({ book }) => {
  // console.log(book)
  const {
    image,
    bookName,
    author,
    tags,
    publisher,
    totalPages,
    rating,
    category,
    yearOfPublishing,
  } = book;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm mb-5 ">
        <figure className="md:p-5 bg-gray-100 md:h-[200px] p-10 md:m-5 m-10">
          <img src={image} alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>

          <div className="">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn bg-green-100 text-green-500 font-semibold mr-8 rounded-4xl"
              >
                {tag}
              </button>
            ))}
            <span>Year of Publishing : {yearOfPublishing}</span>
          </div>
          <div>
            <p>Publisher : {publisher}</p>
            <p>Page {totalPages}</p>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary">{category}</button>
            <button className="btn btn-primary">{rating}</button>
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistBooks;
