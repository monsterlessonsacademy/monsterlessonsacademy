const jwt = require("jsonwebtoken");

const articles = [
  { id: 1, title: "Typescript Eslint - How to use them together", userId: 1 },
  { id: 2, title: "Prettier configuration", userId: 1 },
  { id: 3, title: "Gitlab vs Github vs Bitbucket", userId: 1 },
];

const users = [
  {
    id: 1,
    username: "foo",
  },
];

exports.getArticles = () => {
  return articles;
};

exports.createArticle = (title, user) => {
  const id = articles.length + 1;
  const article = {
    id,
    title,
    userId: user.id,
  };
  articles.push(article);
  return article;
};

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
