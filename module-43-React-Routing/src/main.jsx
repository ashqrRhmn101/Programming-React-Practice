import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobile from "./components/Mobile/Mobile.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Users from "./components/Users/Users.jsx";
import Users2 from "./components/Users2/Users2.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Post from "./components/Post/Post.jsx";
import PostDetails from "./components/Post/PostDetails.jsx";
import Loading from "./components/LoadingSpinner/Loading.jsx";
import { HashLoader } from "react-spinners";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        Component: Home,
        // Component: Loading,
      },
      {
        path: "mobile",
        Component: Mobile,
      },
      {
        path: "laptops",
        Component: Laptops,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<HashLoader />}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
        // Component: Users2,
      },
      {
        path: "usersd/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      {
        path: "/post",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Post,
        // element: <Post/>
      },
      {
        path: "/post-details/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
      {
        path: "*",
        element: <h2>Not Fount: 404 Status</h2>,
      },
    ],
  },
  {
    path: "about",
    element: <div>About me Here</div>,
  },
  {
    path: "blogs",
    element: <div>All my blogs are here</div>,
  },
  {
    path: "app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
