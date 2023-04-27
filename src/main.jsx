import React from "react";
import ReactDOM from "react-dom/client";
import { AlertProvider } from "./alert.context";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AlertProvider>
    <App />
  </AlertProvider>
);
