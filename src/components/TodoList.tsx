import React from "react";
import { Todo } from "../db";

interface ToDoListProps {
  todos: Todo[];
  onDelete: (id: number) => Promise<void>;
  onToggleComplete: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
  todos,
  onDelete,
  onToggleComplete,
}) => {
  const handleDelete = async (id: number) => {
    await onDelete(id);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <span
            onClick={() => onToggleComplete(todo.id!)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.task}
          </span>
          <button onClick={() => handleDelete(todo.id!)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
