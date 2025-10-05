import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../Utility/addToList";
import ReadBookCart from "./readBookCart";

const ListedBooks = () => {
  const data = useLoaderData();

  const [readList, setReadList] = useState([]);
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

  const handleSort = (type) => {
    setSort(type);
    if(type === "pages"){
        const sortByPages = [...readList].sort((a,b) => a.totalPages - b.totalPages)
        setReadList(sortByPages)
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
            <h2>Wishlist Books</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
