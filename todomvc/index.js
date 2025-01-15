import * as helpers from "./helpers.js";
let selectors = {};
let todos = [];
let filter = "all";

const initialize = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service worker registered with", registration.scope);
        })
        .catch((error) => {
          console.error("Service worker registration failed", error);
        });
    });
  }

  if (navigator.onLine) {
    helpers.processTaskQueue();
  }

  window.addEventListener("online", () => {
    helpers.processTaskQueue();
  });

  findElements();
  addListeners();
  render();

  helpers.fetchTodos().then((fetchedTodos) => {
    todos = fetchedTodos;
    render();
  });
};

const addListeners = () => {
  selectors.newTodo.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      addTodo(event.target.value);
      selectors.newTodo.value = "";
    }
  });

  selectors.filters.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      filter = li.getAttribute("filter");
      render();
    });
  });

  selectors.toggleAll.addEventListener("click", (event) => {
    toggleAll(event.target.checked);
  });
};

const addTodo = (text) => {
  helpers.addTodo(text).then((createdTodo) => {
    console.log("createdTodo", createdTodo);
    todos = [...todos, createdTodo];
    render();
  });
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
    <input class="edit" value=${todo.text}>
  `;

  node
    .querySelector(".destroy")
    .addEventListener("click", () => removeTodo(todo.id));

  node
    .querySelector(".toggle")
    .addEventListener("click", () => toggleTodo(todo.id));

  node
    .querySelector("label")
    .addEventListener("dblclick", () => startEditing(node));

  node.querySelector(".edit").addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      updateTodo(todo.id, event.target.value);
    } else if (event.key === "Escape") {
      event.target.value = todo.title;
      render();
    }
  });

  return node;
};

const startEditing = (node) => {
  node.classList.add("editing");
  node.querySelector(".edit").focus();
};

const removeTodo = (todoId) => {
  helpers.removeTodo(todoId).then(() => {
    todos = todos.filter((todo) => todo.id !== todoId);
    render();
  });
};

const toggleTodo = (todoId) => {
  helpers.toggleTodo(todos, todoId).then(() => {
    todos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    render();
  });
};

const toggleAll = (checked) => {
  todos = helpers.toggleAll(todos, checked);
  render();
};

const updateTodo = (todoId, text) => {
  todos = helpers.updateTodo(todos, todoId, text);
  render();
};

const getFilteredTodos = () => {
  console.log("getFilteredTodos", todos);
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
  console.log("render", todos);
  getFilteredTodos().forEach((todo) => {
    console.log("1", todo);
    const todoNode = createTodoNode(todo);
    selectors.todoList.appendChild(todoNode);
  });
  selectors.main.style.display = todos.length > 0 ? "block" : "none";
  selectors.footer.style.display = todos.length > 0 ? "block" : "none";
  const activeTodosCount = todos.filter((todo) => !todo.isCompleted).length;
  selectors.count.innerHTML = `
    <strong>${activeTodosCount}</strong> ${
    activeTodosCount === 1 ? "item" : "items"
  } left
  `;
  selectors.filters.querySelectorAll("a").forEach((a) => {
    a.classList.remove("selected");
  });
  selectors.filters
    .querySelector(`[filter=${filter}] a`)
    .classList.add("selected");
};

initialize();
