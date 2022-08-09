import React, { useEffect } from "react";
import classNames from "classnames";

const Board = ({ currentPlayer }) => {
  const initializeBoard = () => {
    const cells = generateCells();
    console.log("cells", cells);
  };

  useEffect(() => {
    initializeBoard();
  }, []);

  return (
    <div>
      <h3>Current player {currentPlayer}</h3>
      <div className="board">
        {cells.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cell) => (
              <div
                key={cell.cellIndex}
                className={classNames("cell", cell.color)}
              >
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
