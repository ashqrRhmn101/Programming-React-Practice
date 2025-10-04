import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
import Statistics from "./Pages/Statistics.jsx";
import RootLayouts from "./Layouts/RootLayouts.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import CardDetails from "./Pages/CardDetails.jsx";

// const [fetchData, setFetchData] = useState([]);
// const promisData = fetch("/gadget.json")
//   .then((res) => res.json())
//   .then((data) => setFetchData(data));

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        path: "/",
        loader: () => fetch("/gadget.json"),
        Component: Home,
      },
      {
        path: "/home",
        loader: () => fetch("/gadget.json"),
        Component: Home,
      },
      {
        path: "/statistics",
        loader: () => fetch("/gadget.json"),
        Component: Statistics,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        // path: "/card-details/:id",
        // loader: ({ params }) => fetch(`/gadget.json/${params.id}`),
        // Component: CardDetails,
        path: "/card-details/:id",
        loader: async ({ params }) => {
          const res = await fetch("/gadget.json");
          const data = await res.json();
          const item = data.find(
            (product) => product.id === parseInt(params.id)
          );
          return item;
        },
        Component: CardDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
