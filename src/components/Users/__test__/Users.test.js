import axios from "axios";
//import { render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import Users from "../Users";
import { BrowserRouter } from "react-router-dom";
import { act, render, screen, waitFor } from "@testing-library/react";

jest.mock("axios");

const fakeUsers = [
  {
    id: 1,
    name: "Test User 1",
    username: "testuser1",
  },
  {
    id: 2,
    name: "Test User 2",
    username: "testuser2",
  },
];

const MockUsers = () => {
  return (
    <BrowserRouter>
      <Users />
    </BrowserRouter>
  );
};

describe("Users component", () => {
  test("it renders", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<MockUsers />);
    await act(async () => {
      expect(screen.getByText("Users:")).toBeInTheDocument();
    });
    // await waitFor(() => {
    // expect(screen.getByText("Users:")).toBeInTheDocument();
    //});
  });

  test("it renders a correct snapshot", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    const tree = renderer.create(<MockUsers />).toJSON();
    await act(async () => {
      expect(tree).toMatchSnapshot();
    });
  });

  test("it displays a list of users", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    render(<MockUsers />);

    const userList = await waitFor(() => screen.getByTestId("user-list"));

    expect(userList).toBeInTheDocument();
  });

  test("it displays a row for each user", async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    render(<MockUsers />);

    const userList = await waitFor(() => screen.findAllByTestId("user-item"));
    expect(userList).toHaveLength(2);
  });
});
