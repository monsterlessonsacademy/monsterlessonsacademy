import { useState } from "react";
import "./Dashboard.css";

type OverZone = "top" | "bottom" | null;

type Row = {
  id: string;
  name: string;
};

const indexFromEvent = (evt: React.DragEvent<HTMLElement>): number => {
  const dragIndex = (evt.target as HTMLElement).dataset.dragIndex;
  if (dragIndex === undefined) {
    throw new Error("data attribute is not set");
  }
  return Number(dragIndex);
};

const Dashboard = () => {
  const [rows, setRows] = useState<Row[]>([
    { id: "1", name: "foo" },
    { id: "2", name: "bar" },
    { id: "3", name: "baz" },
    { id: "4", name: "qux" },
  ]);
  const [draggedIndex, setDraggedIndex] = useState<number>(-1);
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(-1);
  const [overIndex, setOverIndex] = useState<number>(-1);

  const handleDragStart = (evt: React.DragEvent<HTMLElement>) => {
    const draggedIndex = indexFromEvent(evt);
    setDraggedIndex(draggedIndex);
  };

  const handleDragOver = (evt: React.DragEvent<HTMLElement>) => {
    const rect = (evt.target as HTMLElement).getBoundingClientRect();
    const y = evt.clientY - rect.top;

    const newOverIndex = indexFromEvent(evt);
    const newOverZone: OverZone = y <= rect.height / 2 ? "top" : "bottom";
    if (overIndex === newOverIndex) {
      return;
    }
    const targetIndex = newOverZone === "top" ? newOverIndex : newOverIndex + 1;

    const isAdjacent =
      targetIndex === draggedIndex || targetIndex === draggedIndex + 1;

    const newPlaceholderIndex = isAdjacent ? -1 : targetIndex;

    if (placeholderIndex === newPlaceholderIndex) {
      return;
    }

    setPlaceholderIndex(newPlaceholderIndex);
    setOverIndex(newOverIndex);
  };

  const handleDragEnd = (evt: React.DragEvent<HTMLElement>) => {
    const draggedIndex = indexFromEvent(evt);

    if (placeholderIndex === -1) {
      resetDragState();
      return;
    }

    const toIndex =
      placeholderIndex > draggedIndex ? placeholderIndex - 1 : placeholderIndex;

    const updatedRows = [...rows];
    const [movedRow] = updatedRows.splice(draggedIndex, 1);
    updatedRows.splice(toIndex, 0, movedRow);

    setRows(updatedRows);
    resetDragState();
  };

  const resetDragState = () => {
    setDraggedIndex(-1);
    setPlaceholderIndex(-1);
    setOverIndex(-1);
  };

  const renderedRows = rows.map((row, rowIndex) => (
    <div
      key={row.id}
      data-drag-index={rowIndex}
      className={`row ${
        rowIndex === draggedIndex ? "dragged-row" : "normal-row"
      }`}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      {row.name}
    </div>
  ));

  if (placeholderIndex !== -1) {
    renderedRows.splice(
      placeholderIndex,
      0,
      <div key="placeholder" className="row placeholder-row"></div>
    );
  }

  return (
    <div>
      {renderedRows}
      <div className="state-display">
        {rows.map((row) => row.name).join()}
        <br />
        draggedIndex: {draggedIndex}
        <br />
        overIndex: {overIndex}
        <br />
        placeholderIndex: {placeholderIndex}
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
