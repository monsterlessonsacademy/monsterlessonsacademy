import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import usersReducer from "./reducers/users";
import { watcherSaga } from "./sagas/rootSaga";

const reducers = combineReducers({
  users: usersReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
