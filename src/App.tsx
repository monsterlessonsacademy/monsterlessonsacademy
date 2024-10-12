import React, { useState, useCallback, memo, useMemo, Fragment } from "react";

type UserType = {
  id: string;
  name: string;
};

type ListProps = {
  users: UserType[];
  onRemove: (userId: string) => void;
};

const initialUsers: UserType[] = [
  {
    id: "1",
    name: "foo",
  },
  {
    id: "2",
    name: "bar",
  },
];

const List = memo(({ users, onRemove }: ListProps) => {
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
  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [text, setText] = useState<string>("");
  const handleRemove = useCallback(
    (userId: string) => {
      console.log("handleRemove", userId);
      const filteredUsers = users.filter((user) => user.id !== userId);
      setUsers(filteredUsers);
    },
    [users]
  );
  const usernames = users.map((user) => user.name);
  console.log("usernames", usernames);
  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <Fragment>
      <input type="text" value={text} onChange={handleText} />
      <List users={users} onRemove={handleRemove} />
    </Fragment>
  );
};

export default App;
