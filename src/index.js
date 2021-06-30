import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./store/reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App searchText="foo" />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
