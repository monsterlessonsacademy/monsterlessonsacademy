import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <button
        type="button"
        onClick={toggleTheme}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          outline: "none",
        }}
      >
        Toggle to {!isDark ? "Dark" : "Light"} theme
      </button>
    </div>
  );
};

export default App;
