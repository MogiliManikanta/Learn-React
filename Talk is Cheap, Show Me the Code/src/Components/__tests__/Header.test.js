import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
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

it("Should Login and Logout in the Header Component", () => {
  // Wrap the Header component in the Provider and render it
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Find the Cart link or button with flexible text matching using regex
  const login = screen.getByRole("button", { name: "Login" });
  fireEvent.click(login);
  const logout = screen.getByRole("button", { name: "LogOut" });

  // Assert that the Cart text is in the document
  expect(logout).toBeInTheDocument();
});
