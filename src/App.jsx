import { useContext } from "react";
import Alert from "./Alert";
import AlertContext from "./alert.context";

const App = () => {
  const [, setAlert] = useContext(AlertContext);
  const showAlert = (type) => {
    setAlert({
      text: "This is a custom alert",
      type,
    });
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <Alert />
      <button onClick={() => showAlert("danger")}>Show danger</button>
      <button onClick={() => showAlert("success")}>Show success</button>
    </div>
  );
};

export default App;
