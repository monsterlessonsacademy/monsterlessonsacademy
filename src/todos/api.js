import axios from "axios";

export const cacheKey = "/todos";

export const getTodos = async () => {
  const response = await axios.get("http://localhost:3004/todos");
  return response.data;
};

export const addTodo = async (todoToCreate) => {
  const response = await axios.post(
    "http://localhost:3004/todos",
    todoToCreate
  );
  return response.data;
};

export const updateTodo = async (todoId, fieldsToUpdate) => {
  const response = await axios.put(
    `http://localhost:3004/todos/${todoId}`,
    fieldsToUpdate
  );
  return response.data;
};

export const removeTodo = async (todoId) => {
  await axios.delete(`http://localhost:3004/todos/${todoId}`);
};

export const toggleAll = async (isCompleted, todos) => {
  const promises = todos.map((todo) => {
    return axios.put(`http://localhost:3004/todos/${todo.id}`, {
      text: todo.text,
      isCompleted,
    });
  });
  await Promise.all(promises);
};
