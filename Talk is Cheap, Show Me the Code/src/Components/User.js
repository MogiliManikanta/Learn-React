// import "../../../Talk is Cheap, Show Me the Code/src/App.css";
import "../../App.css";

const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : mogilimanikanta5555@gmail.com</h4>
    </div>
  );
};
export default User;
