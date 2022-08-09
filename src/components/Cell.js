import classNames from "classnames";

const Cell = ({ cell, onCellClick, isSelectedCell }) => {
  const cellStyles = classNames({
    cell: true,
    [cell.cellColor]: true,
    selected: isSelectedCell,
  });
  return (
    <div className={cellStyles} onClick={onCellClick}>
      {!cell.figureName && <div className="available"></div>}
      {cell.figureName && (
        <img
          src={`/figures/${cell.figureColor}-${cell.figureName}.png`}
          alt=""
        />
      )}
    </div>
  );
};
export default Cell;
