import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("Pagination", () => {
  beforeEach(() => {
    vi.mock("../utils", () => {
      return {
        range: () => [1, 2, 3, 4, 5],
      };
    });
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("renders correct pagination", () => {
    render(<Pagination total={50} limit={10} currentPage={1} />);
    expect(screen.getAllByTestId("page-container").length).toBe(5);
    expect(screen.getAllByTestId("page-container")[0]).toHaveTextContent("1");
  });

  it("should emit clicked page", () => {
    const handleClick = vi.fn();
    render(
      <Pagination
        total={50}
        limit={10}
        currentPage={1}
        selectPage={handleClick}
      />
    );
    fireEvent.click(screen.getAllByTestId("page-container")[0]);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
