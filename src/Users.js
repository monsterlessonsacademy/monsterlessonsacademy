import { useState, useEffect } from "react";
import { getUsers, createUser } from "./api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const Users = () => {
  const queryClient = useQueryClient();
  const { data: users = [] } = useQuery(["users"], getUsers);
  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
  const [inputValue, setInputValue] = useState("");
  const addUser = () => {
    createUserMutation.mutate(inputValue);
    setInputValue("");
  };

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
