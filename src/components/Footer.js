import { useContext } from "react";

import { TodosContext } from "contexts/todos";

const Footer = () => {
  const [todosState, dispatch] = useContext(TodosContext);
  const noTodosClass = todosState.todos.length === 0 ? "hidden" : "";
  const activeCount = todosState.todos.filter((todo) => !todo.isCompleted)
    .length;
  const itemsLeftText = ` item${activeCount !== 1 ? "s" : ""} left`;
  const getSelectedClass = (filterName) => {
    return todosState.filter === filterName ? "selected" : "";
  };
  const changeFilter = (event, filterName) => {
    event.preventDefault();
    dispatch({ type: "changeFilter", payload: filterName });
  };

  return (
    <footer className={`footer ${noTodosClass}`}>
      <span className="todo-count">
        <strong>{activeCount}</strong>
        {itemsLeftText}
      </span>
      <ul className="filters">
        <li>
          <a
            href="/"
            className={getSelectedClass("all")}
            onClick={(event) => changeFilter(event, "all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("active")}
            onClick={(event) => changeFilter(event, "active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("completed")}
            onClick={(event) => changeFilter(event, "completed")}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
