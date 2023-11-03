import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //..nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders p before state change", () => {
    render(<Greeting />);

    const pElement = screen.getByText("It's good to see you!");
    expect(pElement).toBeInTheDocument();
  });

  test("renders p after state change", () => {
    render(<Greeting />);

    //Action
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const pElementAfterStateChange = screen.getByText("Changed!");
    expect(pElementAfterStateChange).toBeInTheDocument();
  });

  test("does not render p after state change", () => {
    render(<Greeting />);

    //Action
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const pElementAfterStateChange = screen.queryByText(
      "It's good to see you!"
    );
    expect(pElementAfterStateChange).toBeNull();
  });
});
