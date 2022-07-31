import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "./redux/actions/createUser";
import { getUsers } from "./redux/actions/getUsers";

const Users = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const users = useSelector((state) => state.users.data);
  // const [users, setUsers] = useState([]);
  const addUser = () => {
    dispatch(createUser(inputValue));
    // const newUser = {
    //   id: +Math.random().toFixed(4),
    //   name: inputValue,
    // };
    // setUsers([...users, newUser]);
    setInputValue("");
  };

  useEffect(() => {
    dispatch(getUsers());
    // axios.get("http://localhost:3004/users").then((response) => {
    //   setUsers(response.data);
    // });
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
