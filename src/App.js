import Users from "./Users";
import { usersStore } from "./usersStore";

const App = () => {
  return (
    <div>
      <h1>Monsterlessons Academy</h1>
      <Users store={usersStore} />
    </div>
  );
};

export default App;
