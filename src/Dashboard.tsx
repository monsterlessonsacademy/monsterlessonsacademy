import { useState } from "react";
import "./Dashboard.css";

type OverZone = "top" | "bottom" | null;

type Row = {
  id: string;
  name: string;
};

const indexFromEvent = (evt: React.DragEvent<HTMLElement>): number => {
  try {
    return parseInt((evt.target as HTMLElement).dataset.dragIndex || "", 10);
  } catch {
    return -1;
  }
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
    const index = indexFromEvent(evt);
    setDraggedIndex(index);
  };

  const handleDragOver = (evt: React.DragEvent<HTMLElement>) => {
    const rect = (evt.target as HTMLElement).getBoundingClientRect();
    const y = evt.clientY - rect.top;

    const newOverIndex = indexFromEvent(evt);
    const newOverZone: OverZone = y <= rect.height / 2 ? "top" : "bottom";
    let newPlaceholderIndex =
      newOverZone === null
        ? -1
        : newOverZone === "top"
        ? overIndex
        : overIndex + 1;

    if (
      newPlaceholderIndex === draggedIndex ||
      newPlaceholderIndex === draggedIndex + 1
    ) {
      newPlaceholderIndex = -1;
    }

    if (
      placeholderIndex !== newPlaceholderIndex ||
      overIndex !== newOverIndex
    ) {
      setPlaceholderIndex(newPlaceholderIndex);
      setOverIndex(newOverIndex);
    }
  };

  const handleDragEnd = (evt: React.DragEvent<HTMLElement>) => {
    const index = indexFromEvent(evt);
    const updatedRows = [...rows];
    if (placeholderIndex !== -1) {
      if (placeholderIndex > index) {
        updatedRows.splice(index, 1);
        updatedRows.splice(placeholderIndex - 1, 0, rows[index]);
      } else {
        updatedRows.splice(index, 1);
        updatedRows.splice(placeholderIndex, 0, rows[index]);
      }
    }
    setRows(updatedRows);
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
  console.log(renderedRows, placeholderIndex);

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
