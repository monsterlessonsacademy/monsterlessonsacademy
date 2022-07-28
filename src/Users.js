import { observer } from "mobx-react";
import { useState } from "react";

const Users = observer(({ store }) => {
  const [inputValue, setInputValue] = useState("");
  const addUser = () => {
    store.addUser(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <div>Total: {store.total}</div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      <div>
        {store.users.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
    </div>
  );
});
export default Users;
