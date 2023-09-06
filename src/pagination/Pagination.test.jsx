import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Pagination from "./Pagination";

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
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
