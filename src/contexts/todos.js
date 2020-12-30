import React, { createContext, useReducer } from "react";

const initialState = {
  todos: [],
  filter: "all",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addTask": {
      const newTask = {
        text: action.payload,
        isCompleted: false,
        id: Math.random().toString(16),
      };
      return {
        ...state,
        todos: [...state.todos, newTask],
      };
    }
    case "toggleAll": {
      const updatedTodos = state.todos.map((todo) => ({
        ...todo,
        isCompleted: action.payload,
      }));
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case "toggleTodo": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case "changeTodo": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case "removeTodo": {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    case "changeFilter": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
