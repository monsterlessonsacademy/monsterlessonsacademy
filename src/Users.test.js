import Users from "./Users";
import {
  render,
  screen,
  waitForElement,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
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
    axios.get.mockResolvedValueOnce({ data: [] });
    render(<Users />);
    expect(screen.getByTestId("totals").textContent).toEqual("Total: 0");
  });

  it("renders initial users", async () => {
    axios.get.mockResolvedValueOnce({ data: mockedUsers });

    render(<Users />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    expect(screen.getByTestId("totals").textContent).toEqual("Total: 2");
    expect(screen.getByTestId("users-list").textContent).toEqual("foobar");
  });
});
