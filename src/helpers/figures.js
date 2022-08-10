// export const addFigure = (figure, cells) => {
//   const updatedCells = { ...cells };
//   updatedCells[figure.cellId].figureName = figure.figureName;
//   updatedCells[figure.cellId].figureColor = figure.figureColor;
//   return updatedCells;
// };

export const getDefaultFigures = () => {
  return [
    { figureName: "rook", cellId: 0, figureColor: "black" },
    { figureName: "knight", cellId: 1, figureColor: "black" },
    { figureName: "bishop", cellId: 2, figureColor: "black" },
    { figureName: "queen", cellId: 3, figureColor: "black" },
    { figureName: "king", cellId: 4, figureColor: "black" },
    { figureName: "bishop", cellId: 5, figureColor: "black" },
    { figureName: "knight", cellId: 6, figureColor: "black" },
    { figureName: "rook", cellId: 7, figureColor: "black" },
    { figureName: "pawn", cellId: 8, figureColor: "black" },
    { figureName: "pawn", cellId: 9, figureColor: "black" },
    { figureName: "pawn", cellId: 10, figureColor: "black" },
    { figureName: "pawn", cellId: 11, figureColor: "black" },
    { figureName: "pawn", cellId: 12, figureColor: "black" },
    { figureName: "pawn", cellId: 13, figureColor: "black" },
    { figureName: "pawn", cellId: 14, figureColor: "black" },
    { figureName: "pawn", cellId: 15, figureColor: "black" },

    { figureName: "pawn", cellId: 48, figureColor: "white" },
    { figureName: "pawn", cellId: 49, figureColor: "white" },
    { figureName: "pawn", cellId: 50, figureColor: "white" },
    { figureName: "pawn", cellId: 51, figureColor: "white" },
    { figureName: "pawn", cellId: 52, figureColor: "white" },
    { figureName: "pawn", cellId: 53, figureColor: "white" },
    { figureName: "pawn", cellId: 54, figureColor: "white" },
    { figureName: "pawn", cellId: 55, figureColor: "white" },
    { figureName: "rook", cellId: 56, figureColor: "white" },
    { figureName: "knight", cellId: 57, figureColor: "white" },
    { figureName: "bishop", cellId: 58, figureColor: "white" },
    { figureName: "queen", cellId: 59, figureColor: "white" },
    { figureName: "king", cellId: 60, figureColor: "white" },
    { figureName: "bishop", cellId: 61, figureColor: "white" },
    { figureName: "knight", cellId: 62, figureColor: "white" },
    { figureName: "rook", cellId: 63, figureColor: "white" },
  ];
};
