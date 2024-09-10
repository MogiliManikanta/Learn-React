import RestaurantCards, { withPromotedLabel } from "./RestaurantCards"; // Importing RestaurantCards component for rendering individual cards
import { useState, useEffect } from "react"; // Importing hooks for managing state and lifecycle in functional components
import ShimmerUI from "./ShimmerUI"; // Importing ShimmerUI component for showing a loading placeholder
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

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
      console.log("Data fetched:", restaurants);
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
      const labelPromotedRestaurants = withPromotedLabel(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const checkStatus = useOnlineStatus();
  if (checkStatus === false)
    return (
      <h1 className="text-red-600 text-center mt-8">
        Please check your internet connection
      </h1>
    );

  // Conditional Rendering - Show shimmer UI if the data is still loading
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI /> // Show the loading UI while data is being fetched
  ) : (
    <div className="body mx-auto p-4 max-w-screen-xl">
      <div className="filter flex justify-between items-center mb-4">
        <div className="search flex">
          <input
            type="text"
            className="search-box border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchText} // Controlled input linked to searchText state
            placeholder="Search for restaurants..."
            onChange={(e) => {
              setSearchText(e.target.value); // Update searchText state as user types
            }}
          />
          <button
            className="search-btn ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
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
          className="filter-btn px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={() => {
            // Filter the restaurant list based on rating
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5 // Filter out restaurants with ratings 4.5 or higher
            );
            setFilteredRestaurant(filterList); // Update the filteredRestaurant state with the top-rated restaurants
            console.log("Top rated filter applied");
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          // Render RestaurantCards for each restaurant in filteredRestaurant
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="block hover:shadow-lg transition transform hover:-translate-y-1"
          >
            {restaurant.info.promoted ? (
              <withPromotedLabel resData={restaurant} />
            ) : (
              <RestaurantCards resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
