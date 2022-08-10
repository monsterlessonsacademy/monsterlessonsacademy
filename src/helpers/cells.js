export const canMovePawn = (selectedCell, targetCell, cells) => {
  console.log("canMovePawn");
  const direction = cells[selectedCell.cellId].figureColor === "black" ? 1 : -1;
  const firstStepDirection = cells[selectedCell.cellId].figureColor === "black";
  return true;
};

export const canMoveFigure = (selectedCell, targetCell, cells) => {
  const isTargetFigureSameColor =
    cells[targetCell.cellId].figureColor ===
    cells[selectedCell.cellId].figureColor;
  const isTargetKing = cells[targetCell.cellId].figureName === "king";
  const selectedFigureName = cells[selectedCell.cellId].figureName;

  if (isTargetFigureSameColor || isTargetKing) {
    return false;
  } else if (selectedFigureName === "pawn") {
    return canMovePawn(selectedCell, targetCell, cells);
  }
  return true;
};

export const moveFigure = (selectedCell, targetCell, cells) => {
  if (!canMoveFigure(selectedCell, targetCell, cells)) {
    return;
  }
};
