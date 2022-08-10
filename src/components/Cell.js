import classNames from "classnames";

const Cell = ({ cell, onCellClick, isSelectedCell, figures }) => {
  const cellStyles = classNames({
    cell: true,
    [cell.cellColor]: true,
    selected: isSelectedCell,
  });
  const cellFigure = figures.find((figure) => figure.cellId === cell.cellId);
  console.log("cellFigure", cellFigure, cell.cellId);
  return (
    <div className={cellStyles} onClick={onCellClick}>
      {!cellFigure && <div className="available"></div>}
      {cellFigure && (
        <img
          src={`/figures/${cellFigure.figureColor}-${cellFigure.figureName}.png`}
          alt=""
        />
      )}
    </div>
  );
};
export default Cell;
