import { useState } from "react";

const TooManyRenders = () => {
  const [count, setCount] = useState(0);

  setCount(count + 1); // State update in the render

  return (
    <div className="App">
      {/* onClick doesn't receive a proper callback */}
      <button onClick={setCount((prevCount) => prevCount + 1)}>
        Increment that counter
      </button>
    </div>
  );
};

export default TooManyRenders;
