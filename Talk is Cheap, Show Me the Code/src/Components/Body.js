import RestaurantCards from "./RestaurantCards"; // Importing RestaurantCards component for rendering individual cards
import { useState, useEffect } from "react"; // Importing hooks for managing state and lifecycle in functional components
import ShimmerUI from "./ShimmerUI"; // Importing ShimmerUI component for showing a loading placeholder
import { Link } from "react-router-dom";

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
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      let restaurants = [];

      // Check for multiple possible paths to find the restaurants data
      if (json?.data?.cards) {
        for (const card of json.data.cards) {
          const cardData = card?.card?.card;
          if (cardData?.gridElements?.infoWithStyle?.restaurants) {
            restaurants = cardData.gridElements.infoWithStyle.restaurants;
            break;
          }
        }
      }

      // Fallback if restaurants array is empty or not found
      if (restaurants.length === 0) {
        console.warn("No restaurants found, using fallback data.");
        // You can set some fallback data here if necessary
      }

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
                return res.info.name
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
              (res) => res.info.avgRating >= 4.5 // Filter out restaurants with ratings 4 or higher
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
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
