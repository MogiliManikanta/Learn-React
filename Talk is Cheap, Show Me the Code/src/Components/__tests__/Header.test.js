import { Provider } from "react-redux";
import Header from "../Header";
import { render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("Should render the Header Component", () => {
  // Wrap the Header component in the Provider and render it
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Find the Cart link or button with flexible text matching using regex
  const cartItems = screen.getByText(/Cart/i);

  // Assert that the Cart text is in the document
  expect(cartItems).toBeInTheDocument();
});
