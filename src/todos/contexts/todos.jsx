import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const initialState = {
  todos: [],
  filter: "all",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "getTodos": {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case "addTodo": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
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
    case "updateTodo": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
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

export const changeFilter = async (dispatch, filter) => {
  dispatch({
    type: "changeFilter",
    payload: filter,
  });
};

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getTodos(dispatch);
  }, []);

  return (
    <TodosContext.Provider
      value={[
        state,
        dispatch,
        {
          addTodo: (todoToCreate) => addTodo(dispatch, todoToCreate),
          updateTodo: (todoId, fieldsToUpdate) =>
            updateTodo(dispatch, todoId, fieldsToUpdate),
          removeTodo: (todoId) => removeTodo(dispatch, todoId),
          changeFilter: (filter) => changeFilter(dispatch, filter),
          toggleAll: (isCompleted) =>
            toggleAll(dispatch, isCompleted, state.todos),
        },
      ]}
    >
      {children}
    </TodosContext.Provider>
  );
};
