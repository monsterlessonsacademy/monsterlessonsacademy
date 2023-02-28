import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [name, setName] = useLocalStorage("name", "Jack");
  console.log(name);

  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default App;
