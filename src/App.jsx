import BadTable from "./BadTable";
import issues from "./issues";

const App = () => {
  return (
    <div>
      <h1>Monsterlessons Academy</h1>
      <BadTable issues={issues} />
    </div>
  );
};

export default App;
