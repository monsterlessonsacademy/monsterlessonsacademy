import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { Todo } from "./types/todo.interface";
import { v4 as uuid } from "uuid";
import pug from "pug";

const app = express();
let todos: Todo[] = [];
const getItemsLeft = () => todos.filter((todo) => !todo.isCompleted).length;
const getFilteredTodos = (filter: unknown) => {
  if (filter === "active") {
    return todos.filter((todo) => !todo.isCompleted);
  } else if (filter === "completed") {
    return todos.filter((todo) => todo.isCompleted);
  } else {
    return todos;
  }
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.render("index", {
    todos: getFilteredTodos(req.query.filter),
    itemsLeft: getItemsLeft(),
    filter: req.query.filter,
  });
});

app.post("/todos", (req, res) => {
  const newTodo: Todo = {
    id: uuid(),
    name: req.body.name,
    isCompleted: false,
  };
  todos.push(newTodo);

  const todoItemTemplate = pug.compileFile(
    path.join(__dirname, "views/includes/todo-item.pug")
  );
  const todoItemMarkup = todoItemTemplate({ todo: newTodo });
  const itemCountTemplate = pug.compileFile(
    path.join(__dirname, "views/includes/item-count.pug")
  );
  const itemCountMarkup = itemCountTemplate({ itemsLeft: getItemsLeft() });
  res.send(todoItemMarkup + itemCountMarkup);
});

app.delete("/todos/:id", (req, res) => {
  todos = todos.filter((todo) => todo.id !== req.params.id);

  const itemCountTemplate = pug.compileFile(
    path.join(__dirname, "views/includes/item-count.pug")
  );
  const itemCountMarkup = itemCountTemplate({ itemsLeft: getItemsLeft() });
  res.send(itemCountMarkup);
});

app.patch("/todos/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === req.params.id);

  if (!todo) {
    return res.sendStatus(404);
  }

  todo.isCompleted = !todo.isCompleted;

  const todoItemTemplate = pug.compileFile(
    path.join(__dirname, "views/includes/todo-item.pug")
  );
  const todoItemMarkup = todoItemTemplate({ todo });
  const itemCountTemplate = pug.compileFile(
    path.join(__dirname, "views/includes/item-count.pug")
  );
  const itemCountMarkup = itemCountTemplate({ itemsLeft: getItemsLeft() });
  res.send(todoItemMarkup + itemCountMarkup);
});

app.listen(3012, () => {
  console.log("Project started");
});
