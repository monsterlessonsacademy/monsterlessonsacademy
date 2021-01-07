import useFetch from "./hooks/useFetch";
import { useEffect } from "react";

const App = () => {
  const [{ response, error, isLoading }, doFetch] = useFetch(
    "http://localhost:3004/posts"
  );
  console.log("app", response, error, isLoading);
  useEffect(() => {
    doFetch();
  }, [doFetch]);
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
