import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const Board = ({ currentPlayer, cells, grid }) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const cellClick = (cellId) => {
    const isCurrentPlayerFigure = cells[cellId].figureColor === currentPlayer;
    if (selectedCell && selectedCell !== cells[cellId]) {
      // TODO
    } else if (isCurrentPlayerFigure) {
      setSelectedCell(cellId);
    }
  };

  return (
    <div>
      <h3>Current player {currentPlayer}</h3>
      <div className="board">
        {grid.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cellId) => (
              <Cell
                cell={cells[cellId]}
                isSelectedCell={selectedCell === cellId}
                key={cellId}
                onCellClick={() => cellClick(cellId)}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Board;
