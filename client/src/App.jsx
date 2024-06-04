import { useEffect, useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/todos")
      .then((response) => {
        return response.json();
      })
      .then((todos) => {
        setTodos(todos);
      });
  }, []);

  console.log(todos);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}!!
      </button>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    </>
  );
};

export default App;
