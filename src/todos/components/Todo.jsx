import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { cacheKey, getTodos, removeTodo, updateTodo } from "../api";

const Todo = ({ todo, isEditing, setEditingId }) => {
  const { mutate } = useSWR(cacheKey, getTodos);
  const editingClass = isEditing ? "editing" : "";
  const completedClass = todo.isCompleted ? "completed" : "";
  const [editText, setEditText] = useState(todo.text);
  const editInputEl = useRef(null);

  const setTodoInEditingMode = () => {
    setEditingId(todo.id);
  };
  const toggleTodo = async () => {
    await updateTodo(todo.id, {
      text: todo.text,
      isCompleted: !todo.isCompleted,
    });
    await mutate();
  };
  const remove = async (todoId) => {
    await removeTodo(todoId);
    await mutate();
  };
  const changeEditInput = (event) => {
    setEditText(event.target.value);
  };
  const keyDownEditInput = async (event) => {
    if (event.key === "Enter") {
      await updateTodo(todo.id, {
        text: event.target.value,
        isCompleted: todo.isCompleted,
      });
      await mutate();
      setEditingId(null);
    }

    if (event.key === "Escape") {
      setEditText(todo.text);
      setEditingId(null);
    }
  };

  useEffect(() => {
    if (isEditing) {
      editInputEl.current.focus();
    }
  });

  return (
    <li
      className={`${editingClass} ${completedClass}`}
      data-testid="todo"
      data-cy="todo"
    >
      <div className="view">
        <input
          className="toggle"
          data-testid="toggle"
          data-cy="todoCheckbox"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={toggleTodo}
        />
        <label
          onDoubleClick={setTodoInEditingMode}
          data-testid="label"
          data-cy="todoLabel"
        >
          {todo.text}
        </label>
        <button
          className="destroy"
          onClick={() => remove(todo.id)}
          data-testid="destroy"
          data-cy="destroy"
        />
      </div>
      {isEditing && (
        <input
          className="edit"
          data-testid="edit"
          data-cy="todoEdit"
          ref={editInputEl}
          value={editText}
          onChange={changeEditInput}
          onKeyDown={keyDownEditInput}
        />
      )}
    </li>
  );
};

export default Todo;
