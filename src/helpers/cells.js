import { range } from "./utils";

export const generateCells = () => {
  return range(0, 8).map((rowIndex) => {
    return range(0, 8).map((cellIndex) => {
      return { rowIndex, cellIndex };
    });
  });
};
