import { useReducer, useState } from "react";

const initialState = {
  total: null,
  next: null,
  operation: null,
};

const App = () => {
  const [state, setState] = useState(initialState);
  const calculate = (name: string) => {
    if (name === "ac") {
      setState(initialState);
    }
  };
  return (
    <div className="container">
      <div className="component-button-panel">
        <div>
          <button onClick={() => calculate("ac")}>AC</button>
          <button onClick={() => calculate("+-")}>+-</button>
          <button onClick={() => calculate("%")}>%</button>
          <button onClick={() => calculate("÷")}>÷</button>
        </div>
        <div>
          <button onClick={() => calculate("7")}>7</button>
          <button onClick={() => calculate("8")}>8</button>
          <button onClick={() => calculate("9")}>9</button>
          <button onClick={() => calculate("x")}>x</button>
        </div>
        <div>
          <button onClick={() => calculate("4")}>4</button>
          <button onClick={() => calculate("5")}>5</button>
          <button onClick={() => calculate("6")}>6</button>
          <button onClick={() => calculate("")}>-</button>
        </div>
        <div>
          <button onClick={() => calculate("1")}>1</button>
          <button onClick={() => calculate("2")}>2</button>
          <button onClick={() => calculate("3")}>3</button>
          <button onClick={() => calculate("+")}>+</button>
        </div>
        <div>
          <button onClick={() => calculate("0")}>0</button>
          <button onClick={() => calculate(".")}>.</button>
          <button onClick={() => calculate("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
