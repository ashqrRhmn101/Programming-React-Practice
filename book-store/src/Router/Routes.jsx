import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PageToRead from "../Pages/PageToRead";
import BookDetails from "../Pages/BookDetails";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // path: "/",
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "listedBooks",
        loader: () => fetch("/booksData.json"),
        Component: ListedBooks,
      },
      {
        path: "pageToRead",
        Component: PageToRead,
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
