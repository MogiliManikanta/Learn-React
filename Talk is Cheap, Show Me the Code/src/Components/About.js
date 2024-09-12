import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Class Component Constructor");
  }

  componentDidMount() {
    // console.log("Parent Class Component Did Mounted");
  }

  render() {
    // console.log("Parent Class Component Rendered");
    return (
      <div>
        <h1>I'm From About</h1>
        <h2>How are you?</h2>
        {/* <div>
        //   <UserContext.Consumer>
        //     {(value) => (
        //       <div>
        //         {/* Display the logged-in user *
                <h3>Logged In User: {value}</h3>
        //       </div>
        //     )}
        //   </UserContext.Consumer>
        // </div>*/}

        {/* Functional component usage */}
        {/* <User name={"Manikanta from Func"} location={"Bangalore"} /> */}

        {/* Class component usage */}
        <UserClass name={"Manikanta from Class"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
