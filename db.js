const jwt = require("jsonwebtoken");

const users = [
  {
    id: 1,
    username: "foo",
  },
];

exports.login = (username, password) => {
  const user = users.find((user) => user.username === username);

  if (!user || password !== "123") {
    return null;
  }
  const token = jwt.sign({ id: user.id, username: user.username }, "foobarbaz");

  return {
    id: user.id,
    username,
    token,
  };
};

exports.getUser = (id) => {
  return users.find((user) => user.id === id);
};
