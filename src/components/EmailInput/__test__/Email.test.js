import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Email from "../Email";
import { BrowserRouter } from "react-router-dom";

const MockEmail = () => {
  return (
    <BrowserRouter>
      <Email />
    </BrowserRouter>
  );
};

describe("<Email />", () => {
  test("render email input", () => {
    render(<MockEmail />);

    const inputEmail = screen.getByTestId("email-input");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveAttribute("type", "email");
  });

  test("pass valid email to test email input field", () => {
    render(<MockEmail />);

    const inputEmail = screen.getByTestId("email-input");
    userEvent.type(inputEmail, "test@mail.com");
    expect(inputEmail).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });

  test("pass invalid email to test input value", () => {
    render(<MockEmail />);

    const inputEmail = screen.getByTestId("email-input");
    userEvent.type(inputEmail, "test");
    expect(screen.getByTestId("email-input")).toHaveValue("test");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    expect(screen.queryByTestId("error-msg").textContent).toEqual(
      "Please enter a valid email."
    );
  });
});
