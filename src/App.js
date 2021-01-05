import { useState, useMemo } from "react";
const users = [
  {
    id: "1",
    name: "Foo",
  },
  {
    id: "2",
    name: "bar",
  },
];
const App = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  console.log("text", text);
  console.log("search", search);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSearch = () => {
    setSearch(text);
  };
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("filtering users");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredUsers.map((filteredUser) => (
          <li key={filteredUser.id}>{filteredUser.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
