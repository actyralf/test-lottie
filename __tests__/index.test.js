import {render, screen} from "@testing-library/react";
import Navigation from "../components/Navigation";
import "@testing-library/jest-dom";

describe("HomePage", () => {
  it("checks if there is a nav component in HomePage", () => {
    render(<Navigation />);

    const navbar = screen.getByRole("navigation");

    expect(navbar).toBeInTheDocument();
  });
});