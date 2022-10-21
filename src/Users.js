import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const addUser = () => {
    createUser();
    setInputValue("");
  };
  const fetchUsers = async () => {
    setIsLoading(true);
    const response = await axios.get("http://localhost:3004/users");
    console.log("fetchUsers", response);
    setUsers(response.data);
    setIsLoading(false);
  };
  const createUser = async () => {
    const response = await axios.post("http://localhost:3004/users", {
      name: inputValue,
    });
    const updatedUsers = [...users, response.data];
    setUsers(updatedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div data-testid="totals">Total: {users.length}</div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      {isLoading && <div data-testid="loading">Loading</div>}
      {users.length && (
        <div data-testid="users-list">
          {users.map((user, index) => (
            <div key={index}>{user.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Users;
