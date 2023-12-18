import GoodTable from "./GoodTable";
import issues from "./issues";

const App = () => {
  return (
    <div>
      <h1>Monsterlessons Academy</h1>
      <GoodTable issues={issues} />
    </div>
  );
};

export default App;
