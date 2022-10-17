const jwt = require("jsonwebtoken");
const { getUser } = require("./db");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return req.sendStatus(401);
  }

  const data = jwt.verify(authHeader, "foobarbaz");
  const user = getUser(data.id);

  if (!user) {
    return req.sendStatus(401);
  }

  req.user = user;

  next();
};
