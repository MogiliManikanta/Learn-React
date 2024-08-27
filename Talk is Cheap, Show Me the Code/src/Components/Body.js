import RestaurantCards from "./RestaurantCards";
// import App from "../App";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const arr = useState(resList);
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (list) => list.avgRating < 4.5
            );
            setListOfRestaurants(filterList);
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
