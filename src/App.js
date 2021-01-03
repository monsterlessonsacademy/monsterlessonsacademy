import { useContext } from "react";
import { ThemeContext } from "./index";

const App = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <h1 style={{ background: theme.background, color: theme.foreground }}>
      Hello monsterlessons
      <button onClick={toggleTheme}>Toggle theme</button>
    </h1>
  );
};

export default App;
