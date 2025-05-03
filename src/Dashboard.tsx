import { useState } from "react";
import "./Dashboard.css";

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

  const onDragStart = (evt: React.DragEvent<HTMLElement>) => {
    const dragIndex = indexFromEvent(evt);
    setDraggedIndex(dragIndex);
  };
  const onDragOver = (evt: React.DragEvent<HTMLElement>) => {
    const rect = (evt.target as HTMLElement).getBoundingClientRect();
    const y = evt.clientY - rect.top;
    const overZone = y <= rect.height / 2 ? "top" : "bottom";
    const overIndex = indexFromEvent(evt);
    const targetIndex = overZone === "top" ? overIndex : overIndex + 1;
    const isAdjacent =
      targetIndex === draggedIndex || targetIndex === draggedIndex + 1;
    const newPlaceholderIndex = isAdjacent ? -1 : targetIndex;
    setPlaceholderIndex(newPlaceholderIndex);
  };
  const onDragEnd = (evt: React.DragEvent<HTMLElement>) => {
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
  };

  const renderedRows = rows.map((row, rowIndex) => (
    <div
      key={row.id}
      data-drag-index={rowIndex}
      className={`row normal-row`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
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
        <div>{rows.map((row) => row.name).join()}</div>
        <div>draggedIndex: {draggedIndex}</div>
        <div>placeholderIndex: {placeholderIndex}</div>
      </div>
    </div>
  );
};

export default Dashboard;
