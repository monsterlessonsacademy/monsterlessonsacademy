import { useState, useContext } from "react";

import { TodosContext } from "contexts/todos";

const Header = () => {
  const ENTER_CODE = 13;
  const [text, setText] = useState("");
  const [, dispatch] = useContext(TodosContext);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onTextKeydown = (event) => {
    const isEnter = event.keyCode === ENTER_CODE;
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
        onChange={onTextChange}
        onKeyDown={onTextKeydown}
        autoFocus
      />
    </header>
  );
};

export default Header;
