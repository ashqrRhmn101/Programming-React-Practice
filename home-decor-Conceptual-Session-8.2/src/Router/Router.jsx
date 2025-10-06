import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ErrorPage from "../Pages/ErrorPage";
import ProductDetails from "../Pages/ProductDetails";
import WishList from "../Pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <h1>Loading....</h1>,
    children: [
      {
        // path: "/home",
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/productDetails/:id",
        Component: ProductDetails,
      },
      {
        path: "/wishList",
        Component: WishList,
      },
    ],
  },
]);

export default router;
