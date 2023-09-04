import express from "express";
import bodyParser from "body-parser";
import { connect } from "./db";
import path from "path";
import * as commentsController from "./controllers/comments";
import * as db from "./db";
import * as Comments from "./models/comments";
import * as elements from "typed-html";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", async (_, res, next) => {
  try {
    const rootComments = await db
      .get()
      .collection("comments")
      .find<Comment>({ parentId: null })
      .toArray();
    console.log("rootComments", rootComments);
    res.render("index", { rootComments });
  } catch (err) {
    next(err);
  }
});

app.get("/comments", (_, res, next) => {

});
app.post("/comments", commentsController.create);
app.put("/comments/:id", commentsController.create);
app.delete("/comments/:id", commentsController.deleteById);

const startServer = async () => {
  await connect("mongodb://localhost:27017/comments", "comments");

  app.listen(3012, () => {
    console.log("API is started");
  });
};

startServer();
