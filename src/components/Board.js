import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import { moveFigure } from "../helpers/cells";

const Board = ({ currentPlayer, cells, grid, figures }) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const cellClick = (cellId, rowIndex, columnIndex) => {
    const isCurrentPlayerFigure = cells[cellId].figureColor === currentPlayer;
    if (selectedCell && selectedCell !== cellId) {
      const targetCell = {
        cellId,
        rowIndex,
        columnIndex,
      };
      moveFigure(selectedCell, targetCell, cells);
    } else if (isCurrentPlayerFigure) {
      setSelectedCell({ cellId, rowIndex, columnIndex });
    }
  };

  return (
    <div>
      <h3>Current player {currentPlayer}</h3>
      <div className="board">
        {grid.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cellId, columnIndex) => (
              <Cell
                cell={cells[cellId]}
                isSelectedCell={selectedCell?.cellId === cellId}
                key={cellId}
                figures={figures}
                onCellClick={() => cellClick(cellId, rowIndex, columnIndex)}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Board;
