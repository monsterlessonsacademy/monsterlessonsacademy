import { useState } from "react";
import { addTodo, cacheKey, getTodos } from "../api";
import useSWR from "swr";

const Header = () => {
  const [text, setText] = useState("");
  const { mutate } = useSWR(cacheKey, getTodos);

  const changeText = (event) => {
    setText(event.target.value);
  };

  const keydownText = async (event) => {
    const isEnter = event.key === "Enter";
    const newText = text.trim();
    const isTextPresent = newText.length > 0;

    if (isEnter && isTextPresent) {
      const options = {
        optimisticData: (todos) => {
          console.log("optimistic", todos);
          const newTodo = {
            id: 99999,
            text: newText,
            isCompleted: false,
          };
          const data = [...todos, newTodo];
          console.log("data", data);
          return data;
        },
        rollbackOnError: true,
        revalidate: false,
      };
      await mutate(addTodo({ text: newText, isCompleted: false }), options);
      // await addTodo({ text: newText, isCompleted: false });
      // await mutate();
      setText("");
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
