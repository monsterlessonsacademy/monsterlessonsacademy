import { cacheKey, getTodos } from "../api";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import "../css/todo-mvc-base.css";
import "../css/todo-mvc-app.css";
import useSWR from "swr";
import { useState } from "react";

const Todos = () => {
  const [filter, setFilter] = useState("all");
  const { isLoading, error, data: todos } = useSWR(cacheKey, getTodos);
  console.log("todos", todos);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="todoapp">
      <Header />
      <Main todos={todos} filter={filter} />
      <Footer
        todos={todos}
        changeFilter={(filterName) => setFilter(filterName)}
      />
    </div>
  );
};
export default Todos;
