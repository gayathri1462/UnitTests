import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";
import { BrowserRouter } from "react-router-dom";

const MockCounter = () => {
  return (
    <BrowserRouter>
      <Counter />
    </BrowserRouter>
  );
};

describe("<Counter/>", () => {
  test("renders the title of an application", () => {
    render(<MockCounter />);
    const titleElement = screen.getByText(/Counter App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the Created Using text", () => {
    render(<MockCounter />);
    const CreatedUsing = screen.queryByText(/Created Using/);
    expect(CreatedUsing).toBeInTheDocument();
  });

  test("renders the Created Using link", () => {
    render(<MockCounter />);
    const CreatedUsingLink = screen.getByTestId("created-using");
    expect(CreatedUsingLink).toHaveAttribute("title");
    expect(CreatedUsingLink).toHaveAttribute("href", "https://reactjs.org");
  });

  test("renders initial counter text", () => {
    render(<MockCounter />);
    const counterText = screen.getByTestId("count-text");
    expect(counterText).toHaveClass("count");
    expect(counterText).toHaveTextContent("Total Count: 0");
  });

  test("renders buttons", () => {
    render(<MockCounter />);
    MockCounter;
    const btnIncrement = screen.getByTestId("btn-increment");
    const btnDecrement = screen.getByTestId("btn-decrement");

    expect(btnIncrement).toBeInTheDocument();
    expect(btnIncrement.textContent).toEqual("Increment");

    expect(btnDecrement).toBeInTheDocument();
    expect(btnDecrement.textContent).toEqual("Decrement");
  });

  test("increment counter", () => {
    render(<MockCounter />);

    const btnIncrement = screen.getByTestId("btn-increment");
    const counterText = screen.getByTestId("count-text");
    fireEvent.click(btnIncrement);
    expect(counterText).toHaveTextContent("Total Count: 1");
  });

  test("decrement counter", () => {
    render(<MockCounter />);

    const btnDecrement = screen.getByTestId("btn-decrement");
    const counterText = screen.getByTestId("count-text");
    fireEvent.click(btnDecrement);

    expect(counterText).toHaveTextContent("Total Count: -1");
  });
});
