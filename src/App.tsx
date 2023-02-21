import {
  Component,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export const AppContext = createContext({ theme: "light" });

interface ButtonProps {
  text?: string;
  icon?: string;
  children?: JSX.Element;
}

interface User {
  id: string;
  name: string;
}

interface AppState {
  currentUser?: User;
}

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
//     this.setState({
//       currentUser: { id: "1", name: "Foo" },
//     });
//   }

//   render(): JSX.Element {
//     return (
//       <div>
//         <h1>Monsterlessons Academy</h1>
//         <Button text="Click me" icon="▼" />
//       </div>
//     );
//   }
// }

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const appContext = useContext(AppContext);

  return (
    <AppContext.Provider value={{ theme: "light" }}>
      <h1>Monsterlessons Academy</h1>
      <Button text="Click me" icon="▼" />
    </AppContext.Provider>
  );
};

export default App;
