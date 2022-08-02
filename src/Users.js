import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/actions/getUsers";
import { createUser } from "./redux/actions/createUser";

const Users = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const users = useSelector((state) => state.users.data);
  const addUser = () => {
    dispatch(createUser(inputValue));
    setInputValue("");
  };

  useEffect(() => {
    dispatch(getUsers());
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
