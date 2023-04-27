import { useContext } from "react";
import AlertContext from "./alert.context";
import Alert from "./Alert";

const App = () => {
  const [, setAlert] = useContext(AlertContext);
  const showAlert = (type) => {
    setAlert({
      text: "This is an alert — check it out!",
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
