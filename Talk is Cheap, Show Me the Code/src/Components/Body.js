import RestaurantCards from "./RestaurantCards";
// import App from "../App";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  //   const arr = useState(resList);
  //   const listOfRestaurants = arr[0];
  //   const setListOfRestaurants = arr[1];

  // Local State Variables - Super powerful variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variables updates, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body re Render");
  // useEffect(() => {
  //   console.log("useEffect Called");
  // }, []);
  // console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json);
    // Optional Chaining
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  // conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <ShimmerUI />;
  //   // <h1>Loading.......</h1>;
  // }

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // Search Text
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (list) => list.rating.rate < 4.5
            );
            setListOfRestaurants(filterList);
            console.log("Use State Called");
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCards key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
