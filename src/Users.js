import { useState, useEffect } from "react";
import { useUsersStore } from "./store/useUsersStore";

const Users = () => {
  const [inputValue, setInputValue] = useState("");
  const users = useUsersStore((state) => state.data);
  const isLoading = useUsersStore((state) => state.isLoading);
  const getUsers = useUsersStore((state) => state.getUsers);
  const createUser = useUsersStore((state) => state.createUser);
  const addUser = () => {
    createUser(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <div>Total: {users.length}</div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Users;
