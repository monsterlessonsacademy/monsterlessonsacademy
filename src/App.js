import React, { useState, useCallback } from "react";

const initialUsers = [
  {
    id: "1",
    name: "foo",
  },
  {
    id: "2",
    name: "bar",
  },
];

const List = React.memo(({ users, onRemove }) => {
  console.log("rendering list");
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} <span onClick={() => onRemove(user.id)}>X</span>
        </li>
      ))}
    </ul>
  );
});

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const handleRemove = useCallback(
    (userId) => {
      console.log("handleRemove", userId);
      const filteredUsers = users.filter((user) => user.id !== userId);
      setUsers(filteredUsers);
    },
    [users]
  );
  const handleText = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <List users={users} onRemove={handleRemove} />
    </div>
  );
};

export default App;
