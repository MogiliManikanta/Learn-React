import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
    // this.state = {
    //   count: 0,
    //   deccount: 10,
    // };
    // console.log(this.props.name + "Child Class Component Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Class Component  DidMounted");
    const fetchData = await fetch(
      "https://api.github.com/users/MogiliManikanta"
    );
    const data = await fetchData.json();
    // console.log(data);
    this.setState({
      userInfo: data,
    });

    this.timer = setInterval(() => {
      // console.log("Timer Called in ComponentDidMount");
    }, 1000);
  }
  componentDidUpdate() {
    // console.log("Component DidUpdate Called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Component Will UnMount Called");
  }
  render() {
    // console.log(this.props.name + "Child Class Component Rendered");
    // const { name, location } = this.props;
    // const { count, deccount } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        {/* <h4>Contact : mogilimanikanta5555@gmail.com</h4>*/}
        <img src={avatar_url} style={{ width: "100px" }} alt="Profile" />
        {/*// <h3>count : {count}</h3>
        // <h3>deccount : {deccount}</h3>
        // <button
        //   onClick={() => {
        //     this.setState({
        //       count: this.state.count + 1,
        //       deccount: this.state.deccount - 1,
        //     });
        //   }}
        // >
        //   Increase Count
        // </button>*/}
      </div>
    );
  }
}
export default UserClass;

/****
 * -----MOUNTING -----
 * Constructor(dummy)
 * Render(dummy)
 *
 *      < HTML DUMMY >
 * Component Did Mount
 *  <API Call>
 *  <this.setState> -> State variable is Updated
 *
 * ----ComponentUpdated State
 *      render(API data)
 *      <HTML (new API data)
 *      component Update
 *
 * ----UNMOUNTING -----
 *
 */

/****
 * MOUNTING
 * ----COMPONENT DID MOUNT
 *
 * UPDATING
 * -----COMPONENT DID UPDATE
 *
 *UNMOUNTING
 * -----COMPONENT WILL UNMOUNT
 */
