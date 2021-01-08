import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    axios.get("http://localhost:3004/posts").then((res) => {
      console.log("res", res);
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Hello React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </div>
  );
};

export default App;
