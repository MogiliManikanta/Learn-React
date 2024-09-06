import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>I'm From About</h1>
//       <h2>how are you</h2>
//       <User name={"Manikanta from Func"} location={"Bangalore"} />
//       <UserClass name={"Manikanta from Class"} location={"Bangalore"} />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Class Component Constructor");
  }
  componentDidMount() {
    console.log("Parent Class Component Did Mounted");
  }
  render() {
    console.log("Parent Class Component Rendered");
    return (
      <div>
        <h1>I'm From About</h1>
        <h2>how are you</h2>
        {/* <User name={"Manikanta from Func"} location={"Bangalore"} />*/}
        <UserClass name={"first Class"} location={"Bangalore"} />
        {/*<UserClass name={"second Class"} location={"Bangalore"} />*/}
      </div>
    );
  }
}
export default About;

/* 
Parent Class Component Constructor
Parent Class Component Rendered
    

   ---- First Child Class Component Constructor
   ---- First Child Class Component Rendered

   ---- Second Child Class Component Constructor
   ---- Second Child Class Component Rendered


   <DOM UPDATED - IN SINGLE BATCH>
   ---- First Child Class Component Did Mounted
   ---- Second Child Class Component Did Mounted

Parent Class Component Did Mounted


*/
