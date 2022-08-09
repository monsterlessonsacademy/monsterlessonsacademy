import React, { useEffect } from "react";
import classNames from "classnames";

const Board = ({ currentPlayer, cells, grid }) => {
  return (
    <div>
      <h3>Current player {currentPlayer}</h3>
      <div className="board">
        {grid.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cellId) => (
              <div
                key={cellId}
                className={classNames("cell", cells[cellId].cellColor)}
              >
                {!cells[cellId].figureName && <div className="available"></div>}
                {cells[cellId].figureName && (
                  <img
                    src={`/figures/${cells[cellId].figureColor}-${cells[cellId].figureName}.png`}
                    alt=""
                  />
                )}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Board;
