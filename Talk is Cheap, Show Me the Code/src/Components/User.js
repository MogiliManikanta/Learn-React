// import "../../../Talk is Cheap, Show Me the Code/src/App.css";
// import "../../index.css";
import "../index.css";

const User = ({ name, location }) => {
  return (
    <div className="user-card bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow max-w-xs mx-auto">
      {/* Display the user's name with Tailwind styling */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Name : {name}
      </h2>

      {/* Display the user's location */}
      <h3 className="text-lg text-gray-600 mb-2">Location : {location}</h3>

      {/* Display the contact info */}
      <h4 className="text-gray-500">Contact : mogilimanikanta5555@gmail.com</h4>
    </div>
  );
};

export default User;
