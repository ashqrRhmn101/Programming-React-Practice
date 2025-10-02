import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import Home from "./Components/Pages/Home.jsx";
import { RouterProvider } from "react-router/dom";
import About from "./Components/Pages/About.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import RootLayout from "./Layouts/RootLayout.jsx";
import PlantDetails from "./Components/Pages/PlantDetails.jsx";
import axios from "axios";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        loader: () => fetch("https://openapi.programming-hero.com/api/plants"),
        Component: Home,
      },
      // {
      //   path: "home",
      //   Component: Home,
      // },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/plant-details/:id",
        // Contact: PlantDetails,
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        element: <PlantDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
