import axios from "axios";

const createUser = (name) => {
  console.log("name", name);
  return axios.post("http://localhost:3004/users", { name });
};

export default createUser;
