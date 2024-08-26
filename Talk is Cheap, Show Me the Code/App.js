import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

/* 
* Header
   -Logo
   -Nav Items

* Body
    - Search
    - RestaurantContainer
    - RestaurantCards

* Footer
    -CopyRught
    -Links
    -Address
    -Contact
**/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/logo_192x192.png"
          alt="logo Image"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

let resList = [
  {
    id: 1,
    name: "Margherita Pizza",
    image:
      "https://images.unsplash.com/photo-1594007650011-2604dbfdf44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1hcmdoZXJpdGElMjBwaXp6YXxlbnwwfHx8fDE2MTk2Mjc5NTk&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["Italian"],
    avgRating: 4.5,
    deliveryTime: 30,
    restaurantName: "Pizza Paradise",
    cost: 12.99,
    veg: true,
  },
  {
    id: 2,
    name: "Chicken Biryani",
    image:
      "https://images.unsplash.com/photo-1600665204821-f21a4b1f79b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNoaWNrZW4lMjBiaXJ5YW5pfGVufDB8fHx8MTYxOTYyNzk1OQ&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["Indian"],
    avgRating: 4.2,
    deliveryTime: 45,
    restaurantName: "Spice Junction",
    cost: 10.99,
    veg: false,
  },
  {
    id: 3,
    name: "Vegetable Stir-Fry",
    image:
      "https://images.unsplash.com/photo-1594917898228-e0422cf22818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHN0aXIlMjBmcnl8ZW58MHx8fHwxNjE5NjI4MzAz&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["Chinese"],
    avgRating: 4.0,
    deliveryTime: 35,
    restaurantName: "Wok Master",
    cost: 8.99,
    veg: true,
  },
  {
    id: 4,
    name: "Beef Burger",
    image:
      "https://images.unsplash.com/photo-1561758033-ff5e02c6f2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlZWYlMjBidXJnZXJ8ZW58MHx8fHwxNjE5NjI4MzMw&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["American"],
    avgRating: 4.6,
    deliveryTime: 25,
    restaurantName: "Burger Haven",
    cost: 9.99,
    veg: false,
  },
  {
    id: 5,
    name: "Paneer Butter Masala",
    image:
      "https://images.unsplash.com/photo-1636883772198-d6b2be7b4892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHBhbmVlciUyMGJ1dHRlciUyMG1hc2FsYXxlbnwwfHx8fDE2MTk2Mjg0NDc&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["Indian"],
    avgRating: 4.7,
    deliveryTime: 40,
    restaurantName: "Curry House",
    cost: 11.49,
    veg: true,
  },
  {
    id: 6,
    name: "Sushi Platter",
    image:
      "https://images.unsplash.com/photo-1603097311094-e8c9d56926c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN1c2hpJTIwcGxhdHRlcnxlbnwwfHx8fDE2MTk2Mjg1MTI&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["Japanese"],
    avgRating: 4.8,
    deliveryTime: 50,
    restaurantName: "Sushi World",
    cost: 15.99,
    veg: false,
  },
  {
    id: 7,
    name: "Falafel Wrap",
    image:
      "https://images.unsplash.com/photo-1617957746657-5644b7811361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZhbGFmZWwlMjB3cmFwfGVufDB8fHx8MTYxOTYyODU4MQ&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["Middle Eastern"],
    avgRating: 4.3,
    deliveryTime: 20,
    restaurantName: "Falafel King",
    cost: 7.99,
    veg: true,
  },
  {
    id: 8,
    name: "Chicken Alfredo Pasta",
    image:
      "https://images.unsplash.com/photo-1612392061783-c58ae0b05b94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNoaWNrZW4lMjBhbGZyZWRvfGVufDB8fHx8MTYxOTYyODYwOQ&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["Italian"],
    avgRating: 4.4,
    deliveryTime: 35,
    restaurantName: "Pasta Fresca",
    cost: 13.99,
    veg: false,
  },
  {
    id: 9,
    name: "Veggie Burger",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHZlZ2dpZSUyMGJ1cmdlcnxlbnwwfHx8fDE2MTk2Mjg2NzA&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["American"],
    avgRating: 4.1,
    deliveryTime: 25,
    restaurantName: "Green Delight",
    cost: 8.49,
    veg: true,
  },
  {
    id: 10,
    name: "Tacos",
    image:
      "https://images.unsplash.com/photo-1601924582978-b7249ef4a49c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRhY29zfGVufDB8fHx8MTYxOTYyODY5Nw&ixlib=rb-1.2.1&q=80&w=400",
    cuisines: ["Mexican"],
    avgRating: 4.6,
    deliveryTime: 30,
    restaurantName: "Taco Fiesta",
    cost: 9.99,
    veg: false,
  },
];

const RestaurantCards = ({ resData }) => {
  const { name, cuisines, image, deliveryTime, veg, cost } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime} mins</h4>
      <h4>{veg ? "Vegetarian" : "Non-Vegetarian"}</h4>
      <h3>${cost}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCards key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
