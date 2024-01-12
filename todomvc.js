let selectors = {};
let todos = [];
let filter = "all";

const initialize = () => {
  findElements();
  addListeners();
  render();
};

const findElements = () => {
  selectors = {
    newTodo: document.querySelector(".new-todo"),
    todoList: document.querySelector(".todo-list"),
    footer: document.querySelector(".footer"),
    main: document.querySelector(".main"),
    toggleAll: document.querySelector(".toggle-all"),
    count: document.querySelector(".todo-count"),
    filters: document.querySelector(".filters"),
  };
};

const addListeners = () => {
  selectors.newTodo.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      addTodo(e.target.value);
      selectors.newTodo.value = "";
    }
  });
  selectors.filters.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      filter = li.getAttribute("filter");
      render();
    });
  });
};

const addTodo = (text) => {
  const newTodo = {
    id: crypto.randomUUID(),
    text,
    isCompleted: false,
  };
  todos.push(newTodo);
  render();
};

const getFilteredTodos = () => {
  if (filter === "active") {
    return todos.filter((todo) => !todo.isCompleted);
  } else if (filter === "completed") {
    return todos.filter((todo) => todo.isCompleted);
  } else {
    return todos;
  }
};

const render = () => {
  selectors.todoList.innerHTML = "";
  getFilteredTodos().forEach((todo) => {
    const todoNode = createTodoNode(todo);
    selectors.todoList.appendChild(todoNode);
  });
  selectors.footer.style.display = todos.length > 0 ? "block" : "none";
  selectors.main.style.display = todos.length > 0 ? "block" : "none";
  selectors.toggleAll.checked = todos.every((todo) => todo.isCompleted);
  const activeTodosCount = todos.filter((todo) => !todo.isCompleted).length;
  selectors.count.innerHTML = `
    <strong>${activeTodosCount}</strong>
		${activeTodosCount === 1 ? "item" : "items"} left
  `;
  selectors.filters
    .querySelectorAll("a")
    .forEach((a) => a.classList.remove("selected"));
  selectors.filters
    .querySelector(`[filter="${filter}"] a`)
    .classList.add("selected");
};

const createTodoNode = (todo) => {
  const node = document.createElement("li");
  if (todo.isCompleted) {
    node.classList.add("completed");
  }
  node.innerHTML = `
    <div class="view">
      <input class="toggle" type="checkbox" ${
        todo.isCompleted ? "checked" : ""
      }>
      <label>${todo.text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${todo.text}">
  `;
  node
    .querySelector(".destroy")
    .addEventListener("click", () => removeTodo(todo.id));

  node
    .querySelector(".toggle")
    .addEventListener("click", () => toggleTodo(todo.id));

  return node;
};

const removeTodo = (todoId) => {
  todos = todos.filter((todo) => todo.id !== todoId);
  render();
};

const toggleTodo = (todoId) => {
  console.log("toggle before", todos, todoId);
  todos = todos.map((todo) => {
    if (todo.id === todoId) {
      console.log("found");
      return { ...todo, isCompleted: !todo.isCompleted };
    }
    return todo;
  });
  console.log("toggle", todos);
  render();
};

initialize();
