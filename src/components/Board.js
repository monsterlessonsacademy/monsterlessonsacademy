import React from "react";
import { generateCells } from "../helpers/cells";

const Board = ({ currentPlayer }) => {
  const cells = generateCells();
  console.log("cells", cells);
  return (
    <div>
      <h3>Current player {currentPlayer}</h3>
      <div className="board">
        {cells.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cell) => (
              <div key={cell.cellIndex} className="cell">
                <div className="available"></div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Board;
