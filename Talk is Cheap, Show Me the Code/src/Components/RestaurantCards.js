const RestaurantCards = ({ resData }) => {
  const { name, cuisines, image, deliveryTime, avgRating, veg, cost } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{avgRating}</h4>
      <h4>{veg ? "Vegetarian" : "Non-Vegetarian"}</h4>
      <h3>${cost}</h3>
    </div>
  );
};

export default RestaurantCards;
