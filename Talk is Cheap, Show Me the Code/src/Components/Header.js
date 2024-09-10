import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
  // State variable to manage button name
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Component re-rendered due to state change");

  return (
    <div className="header bg-gray-100 shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img className="w-12 h-12 mr-4" src={LOGO_URL} alt="Logo Image" />
          <h1 className="text-xl font-bold text-gray-800">Restaurant</h1>
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <span
                className={`font-semibold ${
                  useOnlineStatus() ? "text-green-600" : "text-red-600"
                }`}
              >
                {useOnlineStatus() ? "✅ Online" : "🔴 Offline"}
              </span>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-blue-500" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-blue-500" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-blue-500" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-blue-500" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 hover:text-blue-500" to="/grocery">
                Grocery
              </Link>
            </li>
          </ul>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
            onClick={() => {
              // Toggle the button name between "Login" and "LogOut"
              setBtnNameReact((prevName) =>
                prevName === "Login" ? "LogOut" : "Login"
              );
            }}
          >
            {btnNameReact}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
