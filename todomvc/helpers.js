export const fetchTodos = () => {
  if (!navigator.onLine) {
    const todos = JSON.parse(localStorage.getItem("cached-todos")) || [];
    return Promise.resolve(todos);
  }
  return fetch("http://localhost:3004/todos")
    .then((response) => response.json())
    .then((data) => {
      const todos = data;
      localStorage.setItem("cached-todos", JSON.stringify(todos));
      return todos;
    });
};

export const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text,
    isCompleted: false,
  };
  const cachedTodos = JSON.parse(localStorage.getItem("cached-todos")) || [];
  cachedTodos.push(newTodo);
  localStorage.setItem("cached-todos", JSON.stringify(cachedTodos));

  return fetch("http://localhost:3004/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  })
    .then((res) => res.json())
    .catch(() => {
      enqueueTask({
        url: "http://localhost:3004/todos",
        method: "POST",
        action: "addTodo",
        body: newTodo,
      });
      return newTodo;
    });
};

export const removeTodo = (todoId) => {
  const cachedTodos = JSON.parse(localStorage.getItem("cached-todos")) || [];
  const updatedTodos = cachedTodos.filter((todo) => todo.id !== todoId);
  localStorage.setItem("cached-todos", JSON.stringify(updatedTodos));

  return fetch(`http://localhost:3004/todos/${todoId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch(() => {
      enqueueTask({
        url: `http://localhost:3004/todos/${todoId}`,
        method: "DELETE",
        action: "removeTodo",
        body: null,
      });
      return { todoId };
    });
};

export const toggleTodo = (todos, todoId) => {
  const todo = todos.find((todoToFind) => todoToFind.id === todoId);
  const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
  const cachedTodos = JSON.parse(localStorage.getItem("cached-todos")) || [];
  const updatedTodos = cachedTodos.map((todo) =>
    todo.id === todoId ? updatedTodo : todo
  );
  localStorage.setItem("cached-todos", JSON.stringify(updatedTodos));

  return fetch(`http://localhost:3004/todos/${todoId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  })
    .then((res) => res.json())
    .catch(() => {
      enqueueTask({
        url: `http://localhost:3004/todos/${todoId}`,
        method: "PUT",
        action: "toggleTodo",
        body: updatedTodo,
      });
      return updatedTodo;
    });
};

export const updateTodo = (todos, todoId, newText) => {
  return todos.map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, text: newText };
    }
    return todo;
  });
};

export const toggleAll = (todos, isCompleted) => {
  return todos.map((todo) => {
    return { ...todo, isCompleted };
  });
};

export const enqueueTask = (task) => {
  const queue = JSON.parse(localStorage.getItem("task-queue")) || [];
  queue.push(task);
  localStorage.setItem("task-queue", JSON.stringify(queue));
};

export const processTaskQueue = async () => {
  const queue = JSON.parse(localStorage.getItem("task-queue")) || [];

  while (queue.length > 0) {
    const task = queue[0];
    try {
      await fetch(task.url, {
        method: task.method,
        headers: { "Content-Type": "application/json" },
        body: task.body ? JSON.stringify(task.body) : null,
      });
      queue.shift();
      localStorage.setItem("task-queue", JSON.stringify(queue));
    } catch (error) {
      break;
    }
  }
};
