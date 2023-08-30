import express from "express";
import { connect } from "./db";
import * as artistsController from "./controllers/artists";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/artists", artistsController.all);
app.get("/artists/:id", artistsController.findById);
app.put("/artists/:id", artistsController.update);
app.delete("/artists/:id", artistsController.deleteById);
app.post("/artists", artistsController.create);

const startServer = async () => {
  await connect("mongodb://localhost:27017/api", "app");

  app.listen(3012, () => {
    console.log("API is started");
  });
};

startServer();
