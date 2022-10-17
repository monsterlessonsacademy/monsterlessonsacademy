import { useState, useEffect } from "react";
import { getUsers } from "../../api";

const Users = () => {
  const [inputValue, setInputValue] = useState("");
  const addUser = () => {
    // dispatch(createUserAsync(inputValue));
    setInputValue("");
  };

  useEffect(() => {
    // dispatch(getUsersAsync());
  }, []);

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
