import { useState } from "react";

import Todo from "../components/Todo";
import { toggleAll } from "../api";

const Main = ({ todos, filter }) => {
  const [editingId, setEditingId] = useState(null);
  const noTodosClass = todos.length === 0 ? "hidden" : "";
  const isAllTodosSelected = todos.every((todo) => todo.isCompleted);
  const getVisibleTodos = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  };
  const visibleTodos = getVisibleTodos();

  return (
    <section className={`main ${noTodosClass}`} data-testid="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        data-testid="toggleAll"
        data-cy="toggleAll"
        checked={isAllTodosSelected}
        onChange={(e) => toggleAll(e.target.checked, todos)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {visibleTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            isEditing={editingId === todo.id}
            setEditingId={setEditingId}
          />
        ))}
      </ul>
    </section>
  );
};
export default Main;
