import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(() => {
    console.log("im called once");
    return 0;
  });
  const [name, setName] = useState("");
  console.log("render", count, name);
  const increaseCounter = () => {
    console.log("increaseCounter");
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello React {count}</h1>
      <button onClick={increaseCounter}>Click me</button>
    </div>
  );
};

export default App;
