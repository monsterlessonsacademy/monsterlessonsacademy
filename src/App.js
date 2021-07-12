import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
    </div>
  );
};

export default App;
