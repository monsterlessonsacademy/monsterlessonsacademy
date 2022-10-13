import { useState } from "react";
import { useCreateUserMutation, useGetUsersQuery } from "../api/apiSlice";

const Users = () => {
  const [inputValue, setInputValue] = useState("");
  const { data } = useGetUsersQuery();
  const users = data ?? [];
  const [createUser] = useCreateUserMutation();
  const addUser = () => {
    createUser(inputValue);
    setInputValue("");
  };
  console.log("data", users);

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
