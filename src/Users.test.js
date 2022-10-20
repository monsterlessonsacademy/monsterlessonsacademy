import Users from "./Users";
import { render, screen, wait } from "@testing-library/react";
import axios from "axios";

jest.mock("axios");

describe("Users", () => {
  const mockedUsers = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
  ];
  // beforeAll(() => {
  //   axios.get.mockResolvedValue({ data: mockedUsers });
  // });

  // afterAll(() => {
  //   jest.resetAllMocks();
  // });

  it("renders initial totals", () => {
    render(<Users />);
    expect(screen.getByTestId("totals").textContent).toEqual("Total: 0");
  });

  it("renders initial users", async () => {
    axios.get.mockResolvedValueOnce({ data: mockedUsers });

    render(<Users />);
    expect(screen.getByTestId("users-list").textContent).toEqual("foobar");

    await wait();
  });
});
