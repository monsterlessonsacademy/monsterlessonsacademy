import { useState } from "react";
import { addTodo, cacheKey, getTodos } from "../api";
import useSWR from "swr";

const Header = () => {
  const [text, setText] = useState("");
  const { mutate, data: todos } = useSWR(cacheKey, getTodos);

  const changeText = (event) => {
    setText(event.target.value);
  };
  const addTodoOptimistic = async (newText) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: newText,
      isCompleted: false,
    };
    const options = {
      optimisticData: [...todos, newTodo],
      rollbackOnError: true,
      populateCache: true,
      revalidate: false,
    };
    await mutate(
      addTodo({ text: newText, isCompleted: false }, todos),
      options
    );
  };

  const keydownText = async (event) => {
    const isEnter = event.key === "Enter";
    const newText = text.trim();
    const isTextPresent = newText.length > 0;

    if (isEnter && isTextPresent) {
      setText("");
      // await addTodoOptimistic(newText);
      await addTodo({ text: newText, isCompleted: false }, todos);
      await mutate();
    }
  };

  return (
    <header className="header" data-testid="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        data-testid="newTodoInput"
        data-cy="newTodoInput"
        value={text}
        onChange={changeText}
        onKeyDown={keydownText}
        autoFocus
      />
    </header>
  );
};

export default Header;
