const express = require("express");
const uuid = require("uuid");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const users = [
  {
    id: 1,
    username: "foo",
  },
];
const sessions = {};

app.use(bodyParser.json());
app.use(cookieParser());

app.get("/private", (req, res) => {
  const sessionToken = req.cookies["session_token"];

  if (!sessionToken) {
    return res.status(401);
  }

  const currentUserSession = sessions[sessionToken];

  if (!currentUserSession) {
    return res.status(401);
  }

  if (currentUserSession.expiresAt < new Date()) {
    return res.status(401);
  }

  console.log("currentUserSession", currentUserSession);

  const currentUser = users.find(
    (user) => currentUserSession.userId === user.id
  );

  res.send(`Hello authorized user ${currentUser.username}`);
});

app.post("/login", (req, res) => {
  const user = users.find((user) => req.body.username === user.username);

  if (!user || req.body.password !== "123") {
    return res.status(422).json({ error: "Incorrect email or password" });
  }

  const sessionToken = uuid.v4();
  const expiresAt = new Date().setFullYear(new Date().getFullYear() + 1);
  sessions[sessionToken] = {
    expiresAt,
    userId: user.id,
  };

  res.cookie("session_token", sessionToken, { maxAge: expiresAt });
  res.send(user);
});

app.listen(3001, () => {
  console.log("server started");
});
