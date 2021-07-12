import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

const App = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return <h1>Hello monsterlessons</h1>;
};

export default App;
