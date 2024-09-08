import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
  // State variable to manage button name
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Component re-rendered due to state change");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo Image" />
      </div>
      <div className="nav-items">
        <ul>
          {useOnlineStatus() ? "Check Status :" + "✅" : "🔴"}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              // Toggle the button name between "Login" and "LogOut"
              setBtnNameReact((prevName) =>
                prevName === "Login" ? "LogOut" : "Login"
              );
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
