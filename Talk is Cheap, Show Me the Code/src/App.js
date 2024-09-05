import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import Header from "./Components/Header";
import Body from "./Components/Body"; // If you need the Body component later
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

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
