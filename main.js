const reducer = (state = [], action) => {
  if (action.type === "ADD_USER") {
    return [...state, action.payload];
  }

  return state;
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "ADD_USER", payload: "jack" });
store.dispatch({ type: "ADD_USER", payload: "john" });
