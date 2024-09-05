import { useRouteError } from "react-router-dom";
/**
 * @description Error Component
 * This component is used to display an error message
 * when something goes wrong in the app
 * @returns {JSX.Element} - JSX representation of the Error component
 */
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Component</h1>
      <h3>
        {/* The error message is displayed here */}
        look into code Some thing wrong
      </h3>
      <h4>
        {/* A loading animation is displayed here */}
        Loading........
      </h4>
      <h3>
        {error.status} : {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
