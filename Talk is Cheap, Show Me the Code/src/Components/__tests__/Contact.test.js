import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Testing", () => {
  it("Contact Us Page Testing", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  // it === test

  test("Button Testing", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);

    // Querying for an element

    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);
    // const heading = screen.getByRole("heading", { level: 1 });

    // Assertion

    expect(inputBoxes.length).toBe(4);
  });

  test("H2 should not be in the document", () => {
    render(<Contact />);
    const heading = screen.queryByRole("heading", { level: 3 });
    expect(heading).not.toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);

    // Querying for an element

    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);
    // const heading = screen.getByRole("heading", { level: 1 });

    // Assertion

    expect(inputBoxes.length).not.toBe(3);
  });
});
