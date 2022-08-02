import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import usersReducer from "./reducers/users";

const reducers = combineReducers({
  users: usersReducer,
});

const sageMiddleware = createSagaMiddleware();
const middleware = [sageMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

sageMiddleware.run(watcherSaga);

export default store;
