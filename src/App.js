import { useSelector, useDispatch } from "react-redux";

import { usersSelector, filteredUsersSelector } from "./store/selectors";
import {
  addUser as addUserAction,
  changeSearch as changeSearchAction,
  changeUsername as changeUsernameAction,
} from "./store/reducers/users";

const App = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.username);
  const search = useSelector((state) => state.users.search);
  const users = useSelector(usersSelector);
  const filteredUsers = useSelector(filteredUsersSelector);
  console.log("filteredUsers", filteredUsers);

  const handleUser = (e) => {
    dispatch(changeUsernameAction(e.target.value));
  };

  const handleSearch = (e) => {
    dispatch(changeSearchAction(e.target.value));
  };

  const addUser = () => {
    dispatch(addUserAction());
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleUser} />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <button onClick={addUser}>Add user</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
