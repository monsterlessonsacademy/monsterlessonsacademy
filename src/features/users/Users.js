import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync, createUserAsync } from "./usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const users = useSelector((state) => state.users.data);
  const addUser = () => {
    dispatch(createUserAsync(inputValue));
    setInputValue("");
  };

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

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
