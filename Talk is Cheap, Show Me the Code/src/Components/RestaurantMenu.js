import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams(); // Access resId correctly

  useEffect(() => {
    fetchMenu();
  }, []); // Dependency on resId to fetch menu when it changes

  const fetchMenu = async () => {
    try {
      const data = await fetch(`${MENU_API}${resId}`); // Correct usage of resId
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  if (resInfo === null) return <ShimmerUI />;

  // Use optional chaining and provide fallback values to avoid destructuring errors
  const {
    name = "Restaurant Name Unavailable",
    cuisines = [],
    costForTwoMessage = "Cost information unavailable",
  } = resInfo?.cards?.[2]?.card?.card?.info || [];

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.length > 0 ? cuisines.join(", ") : "Cuisines Unavailable"} -{" "}
        {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - $ {item.card.info.price / 100} <br></br>
              {/* <br></br>*/}
            </li>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
