import { useState, useEffect } from "react";
import axios from "axios";

const FetchWithHooks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("initialized fetch with hooks");
    setIsLoading(true);
    axios.get("http://localhost:3004/posts").then((response) => {
      console.log("response", response);
      setPosts(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default FetchWithHooks;
