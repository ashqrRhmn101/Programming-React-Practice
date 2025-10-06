import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../Utility/addToList";
import ReadBookCart from "./readBookCart";
import WishlistBooks from "./WishlistBooks";
import { getWishlistStoreBook } from "../Utility/WishList";

const ListedBooks = () => {
  const data = useLoaderData();

  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sort, setSort] = useState("");
  //   console.log(readList);

  useEffect(() => {
    const storedBookData = getStoreBook();
    const ConvertedStoredBook = storedBookData.map((id) => parseInt(id));
    // console.log(ConvertedStoredBook)
    const ourReadList = data.filter((book) =>
      ConvertedStoredBook.includes(book.bookId)
    );
    setReadList(ourReadList);
  }, []);

  // // WishList useEffect // //

  useEffect(() => {
    const storedBookData = getWishlistStoreBook();
    const ConvertedStoredBook = storedBookData.map((id) => parseInt(id));
    const ourWishList = data.filter((book) =>
      ConvertedStoredBook.includes(book.bookId)
    );
    setWishlist(ourWishList);
  }, []);

  //  //

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPages);
    }
    if (type === "rating") {
      const sortRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortRating);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 text-center py-7">
        <h1 className="text-2xl font-bold">Books</h1>
      </div>

      <div className="text-center py-5">
        <details className="dropdown">
          <summary className="btn m-1">Sort By : {sort ? sort : ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("rating")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex gap-4">
        <Tabs>
          <TabList>
            <Tab>Read Book</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div>
              {readList.map((book) => (
                <ReadBookCart key={book.bookId} book={book} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {wishlist.map((book) => (
                <WishlistBooks key={book.bookId} book={book} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
