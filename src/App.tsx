import { useEffect, useRef, useState } from "react";
import Big from "big.js";

type State = {
  total: string | null;
  next: string | null;
  operation: string | null;
};

const initialState: State = {
  total: null,
  next: null,
  operation: null,
};

const isNumber = (item: string) => {
  return /[0-9]+/.test(item);
};

const operate = (state: State): string => {
  const one = Big(state.total || "0");
  const two = Big(
    state.next ||
      (state.operation === "÷" || state.operation === "x" ? "1" : "0")
  );
  console.log("operate", state, one.toString(), two.toString());
  if (state.operation === "+") {
    return one.plus(two).toString();
  }
  if (state.operation === "-") {
    return one.minus(two).toString();
  }
  if (state.operation === "x") {
    return one.times(two).toString();
  }
  if (state.operation === "÷") {
    if (state.next === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Unknown operation '${state.operation}'`);
};

const calculate = (state: State, name: string): State => {
  if (name === "ac") {
    return initialState;
  }

  if (isNumber(name)) {
    if (state.operation) {
      if (state.next) {
        return { ...state, next: state.next + name };
      }
      return { ...state, next: name };
    }
    if (state.next) {
      const next = state.next === "0" ? name : state.next + name;
      return {
        ...state,
        next,
      };
    }
    return {
      ...state,
      next: name,
    };
  }

  if (name === "%") {
    if (!state.next) {
      return state;
    }
    return {
      ...state,
      next: Big(state.next).div(Big("100")).toString(),
    };
  }

  if (name === ".") {
    if (!state.next) {
      return { ...state, next: "0." };
    }

    if (state.next.includes(".")) {
      return state;
    }
    return { ...state, next: state.next + "." };
  }

  if (name === "=") {
    if (state.next && state.operation) {
      return {
        total: operate(state),
        next: null,
        operation: null,
      };
    } else {
      return state;
    }
  }

  if (name === "+/-") {
    if (state.next) {
      return { ...state, next: (-1 * parseFloat(state.next)).toString() };
    }
    if (state.total) {
      return { ...state, total: (-1 * parseFloat(state.total)).toString() };
    }
    return state;
  }

  // User pressed an operation button and there is an existing operation
  if (state.operation) {
    return {
      total: operate(state),
      next: null,
      operation: name,
    };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: state.next,
    next: null,
    operation: name,
  };
};

const App = () => {
  const [state, setState] = useState(initialState);
  const textRef = useRef<HTMLDivElement>(null);
  const display = state.next || state.total || "0";
  console.log("state", state);

  const handleClick = (name: string) => {
    const newState = calculate(state, name);
    setState(newState);
  };

  useEffect(() => {
    const adjustFontSize = () => {
      const element = textRef.current!;
      let fontSize = 70;

      element.style.fontSize = `${fontSize}px`;

      while (element.scrollWidth > element.clientWidth && fontSize > 1) {
        fontSize--;
        element.style.fontSize = `${fontSize}px`;
      }
    };

    adjustFontSize();
  }, [display]);
  return (
    <div className="container">
      <div className="calculator">
        <div className="screen">
          <div className="display" ref={textRef}>
            {display}
          </div>
        </div>
        <div className="button-panel">
          <div>
            <button onClick={() => handleClick("ac")} className="button">
              AC
            </button>
            <button onClick={() => handleClick("+/-")} className="button">
              +/-
            </button>
            <button onClick={() => handleClick("%")} className="button">
              %
            </button>
            <button
              onClick={() => handleClick("÷")}
              className="button  operation"
            >
              ÷
            </button>
          </div>
          <div>
            <button onClick={() => handleClick("7")} className="button">
              7
            </button>
            <button onClick={() => handleClick("8")} className="button">
              8
            </button>
            <button onClick={() => handleClick("9")} className="button">
              9
            </button>
            <button
              onClick={() => handleClick("x")}
              className="button  operation"
            >
              x
            </button>
          </div>
          <div>
            <button onClick={() => handleClick("4")} className="button">
              4
            </button>
            <button onClick={() => handleClick("5")} className="button">
              5
            </button>
            <button onClick={() => handleClick("6")} className="button">
              6
            </button>
            <button
              onClick={() => handleClick("")}
              className="button  operation"
            >
              -
            </button>
          </div>
          <div>
            <button onClick={() => handleClick("1")} className="button">
              1
            </button>
            <button onClick={() => handleClick("2")} className="button">
              2
            </button>
            <button onClick={() => handleClick("3")} className="button">
              3
            </button>
            <button
              onClick={() => handleClick("+")}
              className="button operation"
            >
              +
            </button>
          </div>
          <div className="last-row">
            <button onClick={() => handleClick("0")} className="button">
              0
            </button>
            <button onClick={() => handleClick(".")} className="button">
              .
            </button>
            <button
              onClick={() => handleClick("=")}
              className="button  operation"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
