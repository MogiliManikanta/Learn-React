import { CDN_URL } from "../utils/constants";

// Main RestaurantCards component
const RestaurantCards = (props) => {
  const { resData } = props;

  // Destructuring restaurant data for easy access
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    // Restaurant card container with hover and transition effects
    <div className="res-card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 p-4">
      {/* Restaurant image */}
      <img
        className="res-logo w-full h-40 object-cover rounded-t-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      {/* Restaurant information */}
      <div className="res-card-content mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <hr className="border-gray-300 mb-2" />

        {/* Cuisines */}
        <em className="text-gray-600 block mb-2">{cuisines.join(", ")}</em>

        {/* Restaurant details */}
        <div className="text-sm text-gray-700 space-y-1">
          <h4 className="font-medium">⭐ {avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} mins</h4>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component to add "Promoted" label
// export const withPromotedLabel = (Component) => {
//   return (props) => (
//     <div className="relative">
//       <span className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded">
//         Promoted
//       </span>
//       <Component {...props} />
//     </div>
//   );
// };
// Higher Order Component to add "Promoted" label
export const withPromotedLabel = (RestaurantCards) => {
  return (props) => {
    // Extract props that should not be passed to the DOM element
    // const { resData, ...rest } = props;

    return (
      <div className="relative">
        <span className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded">
          Promoted
        </span>
        {/* Pass only necessary props to the Component */}
        <RestaurantCards {...props} />
      </div>
    );
  };
};

export default RestaurantCards;
