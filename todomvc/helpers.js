export const toggleAll = (todos, isCompleted) => {
  return todos.map((todo) => ({ ...todo, isCompleted }));
};

export const toggleTodo = (todos, todoId) => {
  return todos.map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, isCompleted: !todo.isCompleted };
    }
    return todo;
  });
};

export const removeTodo = (todos, todoId) => {
  return todos.filter((todo) => todo.id !== todoId);
};

export const updateTodo = (todos, todoId, newText) => {
  return todos.map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, text: newText };
    }
    return todo;
  });
};

export const addTodo = (todos, text) => {
  const newTodo = {
    id: crypto.randomUUID(),
    text,
    isCompleted: false,
  };
  return [...todos, newTodo];
};
