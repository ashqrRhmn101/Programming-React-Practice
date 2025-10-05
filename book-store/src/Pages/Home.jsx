import React from "react";
import bookImg from "../assets/books.jpg";
import { useLoaderData } from "react-router";
import BooksCard from "./BooksCard";

const Home = () => {
  const booksData = useLoaderData();
  //   console.log(booksData);
  return (
    <div>
      <div className="md:flex justify-around items-center bg-gray-100 rounded-xl my-4 md:py-28 py-15 text-center">
        <div className="space-y-7">
          <h1 className="text-3xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn bg-green-500 text-white mb-9">View The List</button>
        </div>
        <div>
          <img src={bookImg} alt="" className="w-[300px] mx-auto" />
        </div>
      </div>

        <h1 className="text-2xl font-bold py-10 text-center">Books</h1>
      <div className="grid md:grid-cols-3 gap-7">
        {booksData.map((bookData) => (
          <BooksCard key={bookData.bookId} bookData={bookData} />
        ))}
      </div>
    </div>
  );
};

export default Home;
