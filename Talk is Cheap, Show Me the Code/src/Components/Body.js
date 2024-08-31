import RestaurantCards from "./RestaurantCards"; // Importing RestaurantCards component for rendering individual cards
import resList from "../utils/mockData"; // (Unused import, can be removed)
import { useState, useEffect } from "react"; // Importing hooks for managing state and lifecycle in functional components
import ShimmerUI from "./ShimmerUI"; // Importing ShimmerUI component for showing a loading placeholder

const Body = () => {
  // Local State Variables - Super powerful variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]); // State to hold the list of all restaurants fetched from the API
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // State to hold the filtered list based on search/filter criteria
  const [searchText, setSearchText] = useState(""); // State to hold the current search text

  // Whenever state variables update, React triggers a reconciliation cycle (re-renders the component)
  console.log("Body re Render");

  // Fetch the data when the component is mounted
  useEffect(() => {
    fetchData(); // Call fetchData on component mount
  }, []); // Empty dependency array ensures this runs only once

  const fetchData = async () => {
    // Async function to fetch data from the API
    const data = await fetch("https://fakestoreapi.com/products"); // Fetch data from the provided API
    const json = await data.json(); // Convert the response to JSON
    console.log(json);
    setListOfRestaurants(json); // Set the fetched data to the listOfRestaurants state
    setFilteredRestaurant(json); // Also set the same data to filteredRestaurant to initialize it
  };

  // Conditional Rendering - Show shimmer UI if the data is still loading
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI /> // Show the loading UI while data is being fetched
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText} // Controlled input linked to searchText state
            onChange={(e) => {
              setSearchText(e.target.value); // Update searchText state as user types
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              const filtered = listOfRestaurants.filter((res) => {
                return res.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase()); // Case-insensitive search
              });
              setFilteredRestaurant(filtered); // Update the filteredRestaurant state with the filtered results
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter the restaurant list based on rating
            const filterList = listOfRestaurants.filter(
              (list) => list.rating.rate >= 4.5 // Filter out restaurants with ratings 4.5 or higher
            );
            setFilteredRestaurant(filterList); // Update the filteredRestaurant state with the top-rated restaurants
            console.log("Top rated filter applied");
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          // Render RestaurantCards for each restaurant in filteredRestaurant
          <RestaurantCards key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
