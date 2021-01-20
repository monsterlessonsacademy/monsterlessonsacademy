const reducer = (state = [], action) => {
  if (action.type === "ADD_USER") {
    return [...state, action.payload];
  }

  return state;
};

const store = Redux.createStore(reducer);
const list = document.querySelector(".list");
const addUserBtn = document.querySelector(".addUser");
const userInput = document.querySelector(".userInput");

store.subscribe(() => {
  list.innerHTML = "";
  userInput.value = "";
  store.getState().forEach((track) => {
    const li = document.createElement("li");
    li.textContent = track;
    list.appendChild(li);
  });
});

addUserBtn.addEventListener("click", () => {
  store.dispatch({ type: "ADD_USER", payload: userInput.value });
});
