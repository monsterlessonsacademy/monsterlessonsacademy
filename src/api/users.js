import axios from "axios";

export const getUsers = () => axios.get("http://localhost:3004/users");

export const createUser = (name) => {
  return axios.post("http://localhost:3004/users", { name });
};
