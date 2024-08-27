import React from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
// import RestaurantCards from "./Components/RestaurantCards";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
