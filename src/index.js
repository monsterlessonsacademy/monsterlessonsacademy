import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext();
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const [activeTheme, setActiveTheme] = useState("light");
  const toggleTheme = () => {
    const nextTheme = activeTheme === "light" ? "dark" : "light";
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
    console.log("toggleTheme", theme, activeTheme);
  };
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
