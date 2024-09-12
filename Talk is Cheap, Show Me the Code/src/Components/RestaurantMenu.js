import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
import ShimmerUI from "./ShimmerUI";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Access resId correctly
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <ShimmerUI />;

  // Use optional chaining and provide fallback values to avoid destructuring errors
  const {
    name = "Restaurant Name Unavailable",
    cuisines = [],
    costForTwoMessage = "Cost information unavailable",
  } = resInfo?.cards?.[2]?.card?.card?.info || [];

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || []; // Default to an empty array if undefined

  // Conditional check to ensure categories are defined before rendering
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/** Categories of Accordion */}
      {categories.length > 0 ? (
        categories.map((category, index) => (
          // controlled Component
          <RestaurantCategory
            key={category?.card?.card?.info?.["id"]}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};
export default RestaurantMenu;
