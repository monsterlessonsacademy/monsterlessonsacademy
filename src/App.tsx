import React, { useState, useEffect } from "react";
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import { Todo, getTodos, addTodo, deleteTodo, updateTodo } from "./db";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const storedTodos = await getTodos();
      setTodos(storedTodos);
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (task: string) => {
    const newTodo: Todo = { task, completed: false };
    await addTodo(newTodo);
    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    const updatedTodos = await getTodos();
    setTodos(updatedTodos);
  };

  const handleToggleComplete = async (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      await updateTodo({ ...todo, completed: !todo.completed });
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <ToDoForm onAdd={handleAddTodo} />
      <ToDoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default App;
