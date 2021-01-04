import { useRef, useState } from "react";
const App = () => {
  const [username, setUsername] = useState("");
  const textInput = useRef();
  const fooRef = useRef();
  console.log("textInput", textInput);
  console.log("username", username);
  const onTextFocus = () => {
    console.log("onTextFocus", textInput.current.value);
    textInput.current.focus();
    fooRef.current = "fooo";
    console.log("ffoRef", fooRef);
  };
  return (
    <div>
      Hello
      <input
        type="text"
        value={username}
        ref={textInput}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div>Foo: {fooRef.current}</div>
      <button onClick={onTextFocus}>Focus on input pls</button>
    </div>
  );
};

export default App;
