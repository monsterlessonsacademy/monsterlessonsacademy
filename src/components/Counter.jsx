import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button type="text" onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
