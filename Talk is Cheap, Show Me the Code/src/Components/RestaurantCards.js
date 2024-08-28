const RestaurantCards = ({ resData }) => {
  const { title, price, image, category, rating } = resData;
  const { rate = "No Rating", count = 0 } = rating || {}; // Fallback for rating

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image} />
      <h3>{title}</h3>
      <h4>{category}</h4>
      <h4>{rate} ⭐</h4>
      <h4>{count} reviews</h4>
      <h3>${price}</h3>
    </div>
  );
};

export default RestaurantCards;
