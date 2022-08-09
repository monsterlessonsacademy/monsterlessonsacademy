import { range } from "./utils";

export const generateCells = () => {
  return range(0, 8).map((rowIndex) => {
    return range(0, 8).map((cellIndex) => {
      const color = (rowIndex + cellIndex) % 2 !== 0 ? "black" : "white";
      return { rowIndex, cellIndex, color };
    });
  });
};
