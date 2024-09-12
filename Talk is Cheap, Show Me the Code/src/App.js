import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import ShimmerUI from "./Components/ShimmerUI";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
// import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./Components/Grocery"));

const App = () => {
  // // const [userName, setUserName] = useState({ name: "Guest" });

  // // Authentication
  // useEffect(() => {
  //   // Simulating an API call to get the user name
  //   const data = {
  //     name: "Guest",
  //   };

  //   setUserName(data);
  // }, []);

  return (
    // <UserContext.Provider value={{ loggedInUser: userName.name }}>
    <div className="container">
      <Header />
      <Outlet />
    </div>
    // </UserContext.Provider>
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
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
