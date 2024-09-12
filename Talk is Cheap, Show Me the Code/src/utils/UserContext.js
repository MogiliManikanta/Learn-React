import { createContext } from "react";

// Define a default context value
const UserContext = createContext({ name: "Guest" }); // name: "Manikanta");

export default UserContext;
