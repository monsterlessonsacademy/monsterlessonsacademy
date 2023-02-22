import {
  Component,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface User {
  id: string;
  name: string;
}

interface ButtonProps {
  text?: string;
  icon?: string;
  children?: JSX.Element;
}

interface AppState {
  currentUser?: User;
}

const AppContext = createContext({ theme: "light" });

const Button = ({
  text = "submit",
  icon,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button>
      {icon && <span>{icon}</span>}
      {text}
      {children && children}
    </button>
  );
};

// class App extends Component<{}, AppState> {
//   componentDidMount() {
//     this.setState({ currentUser: { id: "1", name: "foo" } });
//   }

//   render(): JSX.Element {
//     return (
//       <div>
//         <h1>Monsterlessonss Academy</h1>
//         <Button text="Fooo" icon="▼"></Button>
//       </div>
//     );
//   }
// }

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const appContext = useContext(AppContext);
  return (
    <AppContext.Provider value={{ theme: "dark" }}>
      <h1>Monsterlessonss Academy</h1>
      <Button text="Fooo" icon="▼"></Button>
    </AppContext.Provider>
  );
};

export default App;
