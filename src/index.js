const { connect } = require("./db");
const express = require("express");
const commentsController = require("./controllers/comments");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Hello API");
});

app.get("/comments", commentsController.all);
app.post("/comments", commentsController.create);
app.put("/comments/:id", commentsController.create);
app.delete("/comments/:id", commentsController.delete);

const startServer = async () => {
  await connect("mongodb://localhost:27017/comments");

  app.listen(3012, () => {
    console.log("API is started");
  });
};

startServer();
