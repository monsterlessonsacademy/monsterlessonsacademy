const express = require("express");
const bodyParser = require("body-parser");
const { connect } = require("./db");
const commentsController = require("./controllers/comments");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Hello API");
});

app.get("/comments", commentsController.all);
app.post("/comments", commentsController.create);
app.put("/comments/:id", commentsController.update);
app.delete("/comments/:id", commentsController.delete);

const startServer = async () => {
  await connect("mongodb://localhost:27017/comments");

  app.listen(3012, function () {
    console.log("API app started");
  });
};

startServer();
