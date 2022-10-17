const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getArticles, login, createArticle } = require("./db");
const authMiddleware = require("./authMiddleware");
app.use(bodyParser.json());

app.get("/articles", (req, res) => {
  const articles = getArticles();
  res.send(articles);
});

app.post("/articles", authMiddleware, (req, res) => {
  const article = createArticle(req.body.title, req.user);
  res.send(article);
});

app.post("/login", (req, res) => {
  const user = login(req.body.username, req.body.password);
  if (!user) {
    return res.status(422).json({ error: "Incorrect email or password" });
  }
  res.send(user);
});

app.listen(3001, () => {
  console.log("server started");
});
