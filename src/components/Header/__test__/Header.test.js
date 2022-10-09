import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="ToDo" />);
    const h1Element = screen.getByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });

  it("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument();
  });

  it("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const h1Element = screen.getByTitle("Header");
    expect(h1Element).toBeInTheDocument();
  });

  it("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const h2Element = screen.getByTestId("header-1");
    expect(h2Element).toBeInTheDocument();
  });

  it("should render same text passed into title prop", async () => {
    render(<Header title="todo" />);
    const h1Element = await screen.findByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });

  it("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const h1Element = screen.queryByText(/dogs/i);
    expect(h1Element).not.toBeInTheDocument;
  });

  it("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const h1Elements = screen.getAllByText(/todo/i);
    expect(h1Elements.length).toBe(1);
  });
});
