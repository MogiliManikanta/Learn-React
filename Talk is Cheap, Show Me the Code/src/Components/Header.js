import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
