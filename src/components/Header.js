import { useState, useContext } from "react";

import { TodosContext } from "contexts/todos";
import { enterCode } from "helpers/keycodes";

const Header = () => {
  const [text, setText] = useState("");
  const [, dispatch] = useContext(TodosContext);

  const changeText = (event) => {
    setText(event.target.value);
  };

  const keydownText = (event) => {
    const isEnter = event.keyCode === enterCode;
    const newText = text.trim();
    const isTextPresent = newText.length > 0;

    if (isEnter && isTextPresent) {
      dispatch({ type: "addTask", payload: newText });
      setText("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={changeText}
        onKeyDown={keydownText}
        autoFocus
      />
    </header>
  );
};

export default Header;
