import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import "../Talk is Cheap, Show Me the Code/index.css";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body"; // If you need the Body component later
import About from "./Components/About";
import Error from "./Components/Error";
import ShimmerUI from "./Components/ShimmerUI";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import ShimmerUI from "./Components/ShimmerUI";
// import Grocery from "./Components/Grocery";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};
/********
 *
 * Chunking
 * Code Splitting
 * Dynamically Importing
 * Dynamic Bundling
 * Lazy Loading
 * onDemand Loading
 *
 *
 *
 *
 *
 */

const Grocery = lazy(() => import("./Components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", // Removed leading slash
        element: <About />,
      },
      {
        path: "/contact", // Removed leading slash
        element: <Contact />,
      },
      {
        path: "/grocery", // Removed leading slash
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart", // Removed leading slash
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId", // Removed leading slash
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />, // Correctly placed for handling errors
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default App;
