import axios from "axios";

export const getUsers = () =>
  axios.get("http://localhost:3004/users").then((res) => res.data);
