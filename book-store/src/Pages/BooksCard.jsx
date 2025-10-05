import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const BooksCard = ({ bookData }) => {
  //   console.log(bookData);
  const { image, bookName, author, tags, rating, category, bookId } = bookData;
  return (
    <Link to={`bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm p-5">
        <figure className="bg-gray-100 w-[300px] mx-auto">
          <img src={image} alt="Book Images" className="h-[166px] py-6" />
        </figure>
        <div className="card-body">
          <div className="">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn bg-green-100 text-green-500 font-semibold mr-8 rounded-4xl"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="border-dashed border-b-2 border-gray-100 pb-4">
            By : {author}
          </p>
          <div className="flex justify-between pt-2">
            <div className="font-semibold">{category}</div>
            <div className="flex font-semibold">
              {rating}
              <Star />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;
