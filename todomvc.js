const selectors = {};
const todos = [];

const initialize = () => {
  findElements();
  addListeners();
};

const findElements = () => {
  selectors.newTodo = document.querySelector(".new-todo");
  console.log(selectors);
};

const addListeners = () => {
  selectors.newTodo.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      console.log("keyup", e.target.value);
      addTodo(e.target.value);
      selectors.newTodo.value = "";
    }
  });
};

const addTodo = (text) => {
  const newTodo = {
    id: crypto.randomUUID(),
    text,
    isCompleted: false,
  };
  todos.push(newTodo);
};

initialize();
